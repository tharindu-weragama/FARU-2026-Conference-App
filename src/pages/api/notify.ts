import type { APIRoute } from 'astro';
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';
import { v5 as uuidv5 } from 'uuid';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const secret = process.env.SANITY_WEBHOOK_SECRET;
  const apiKey = process.env.ONESIGNAL_REST_API_KEY;
  const appId = 'dbeb99b6-9240-45d7-a469-ef9f110bcc92';

  if (!secret || !apiKey) {
    return new Response('Missing configuration', { status: 500 });
  }

  try {
    const rawBody = await request.text();
    const signature = request.headers.get(SIGNATURE_HEADER_NAME);

    if (!signature || !(await isValidSignature(rawBody, signature, secret))) {
      return new Response('Unauthorized', { status: 401 });
    }

    const update = JSON.parse(rawBody);

    if (
      update._type !== 'conferenceUpdate' ||
      update.category !== 'general' ||
      update.pushNotify !== true
    ) {
      return new Response('Notification skipped', { status: 200 });
    }

    if (
      typeof update._id !== 'string' ||
      update._id.startsWith('drafts.') ||
      typeof update.title !== 'string' ||
      !update.title.trim() ||
      typeof update.message !== 'string' ||
      !update.message.trim()
    ) {
      return new Response('Invalid announcement', { status: 400 });
    }

    if (update.expireAt && new Date(update.expireAt).getTime() <= Date.now()) {
      return new Response('Announcement expired', { status: 200 });
    }

    const notificationId = uuidv5(update._id, appId);

    const response = await fetch(
      'https://api.onesignal.com/notifications',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Key ${apiKey}`,
        },
        body: JSON.stringify({
          app_id: appId,
          target_channel: 'push',
          included_segments: ['Subscribed Users'],
          headings: {
            en: update.title,
          },
          contents: {
            en: update.message,
          },
          url: new URL('/updates/', request.url).href,
          idempotency_key: notificationId,
          ttl: 3600,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok || !result.id) {
      console.error('OneSignal error:', response.status);
      return new Response('Notification failed', { status: 502 });
    }

    return Response.json({
      success: true,
      notificationId: result.id,
    });

  } catch {
    return new Response('Internal server error', { status: 500 });
  }
};