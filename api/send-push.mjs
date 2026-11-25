
import { createHash } from 'node:crypto';
import {
    isValidSignature,
    SIGNATURE_HEADER_NAME,
} from '@sanity/webhook';

function reply(data, status = 200) {
    return Response.json(data, { status });
}

function notificationKey(appId, documentId) {
    const bytes = Buffer.from(
        createHash('sha256')
            .update(`faru-2026:push:${appId}:${documentId}`)
            .digest()
            .subarray(0, 16)
    );

    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;

    const hex = bytes.toString('hex');

    return [
        hex.slice(0, 8),
        hex.slice(8, 12),
        hex.slice(12, 16),
        hex.slice(16, 20),
        hex.slice(20),
    ].join('-');
}

export function GET() {
    return reply({
        service: 'FARU 2026 Push Notifications',
        status: 'online',
    });
}

export async function POST(request) {
    const secret = process.env.SANITY_WEBHOOK_SECRET;
    const apiKey = process.env.ONESIGNAL_REST_API_KEY?.trim();
    const appId = process.env.ONESIGNAL_APP_ID?.trim();

    if (!secret || !apiKey || !appId) {
        return reply({ error: 'Server configuration missing' }, 503);
    }

    if (
        !/^[\x21-\x7E]+$/.test(apiKey) ||
        apiKey.startsWith('Key ')
    ) {
        return reply({ error: 'Invalid API key configuration' }, 503);
    }

    let rawBody;

    try {
        rawBody = await request.text();
    } catch {
        return reply({ error: 'Invalid request body' }, 400);
    }

    if (Buffer.byteLength(rawBody, 'utf8') > 16000) {
        return reply({ error: 'Payload too large' }, 413);
    }

    const signature = request.headers.get(SIGNATURE_HEADER_NAME);

    if (!signature) {
        return reply({ error: 'Missing webhook signature' }, 401);
    }

    let validSignature = false;

    try {
        validSignature = await isValidSignature(
            rawBody,
            signature,
            secret
        );
    } catch {
        validSignature = false;
    }

    if (!validSignature) {
        return reply({ error: 'Invalid webhook signature' }, 401);
    }

    let update;

    try {
        update = JSON.parse(rawBody);
    } catch {
        return reply({ error: 'Invalid JSON' }, 400);
    }

    if (
        update?._type !== 'conferenceUpdate' ||
        update.category !== 'general' ||
        update.sendPushNotification !== true
    ) {
        return reply({ skipped: true });
    }

    const documentId = update._id;

    const title =
        typeof update.title === 'string'
            ? update.title.trim()
            : '';

    const message =
        typeof update.message === 'string'
            ? update.message.trim()
            : '';

    if (
        typeof documentId !== 'string' ||
        !documentId ||
        documentId.startsWith('drafts.') ||
        documentId.startsWith('versions.') ||
        !title ||
        !message
    ) {
        return reply({ error: 'Invalid announcement' }, 400);
    }

    const notification = {
        app_id: appId,
        target_channel: 'push',
        included_segments: ['Subscribed Users'],
        headings: {
            en: title.slice(0, 120),
        },
        contents: {
            en: message.slice(0, 1000),
        },
        idempotency_key: notificationKey(appId, documentId),
    };

    const siteUrl = process.env.FARU_SITE_URL?.trim();

    if (siteUrl) {
        try {
            const destination = new URL('/updates/', siteUrl);

            if (destination.protocol === 'https:') {
                notification.url = destination.toString();
            }
        } catch {
            console.error('Invalid FARU_SITE_URL configuration');
        }
    }

    try {
        const response = await fetch(
            'https://api.onesignal.com/notifications',
            {
                method: 'POST',
                headers: {
                    Authorization: `Key ${apiKey}`,
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(notification),
                signal: AbortSignal.timeout(12000),
            }
        );

        let result;

        try {
            result = await response.json();
        } catch {
            return reply({ error: 'Invalid OneSignal response' }, 502);
        }

        if (!response.ok || !result?.id) {
            console.error(
                'OneSignal request failed:',
                response.status,
                result?.errors
            );

            return reply({ error: 'Notification not accepted' }, 502);
        }

        return reply({
            success: true,
            notificationId: result.id,
        });
    } catch (error) {
        console.error('Notification service error:', error);

        return reply(
            { error: 'Notification service unavailable' },
            502
        );
    }
}
