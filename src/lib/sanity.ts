
import {createClient} from '@sanity/client'

export const sanityClient = createClient({
  projectId: '5vyjnyj6',
  dataset: 'production',
  apiVersion: '2026-11-22',
  perspective: 'published',
  useCdn: true,
})

export const updatesQuery = `
  *[_type == "conferenceUpdate"]
  | order(_createdAt desc) {
    _id,
    _createdAt,
    _updatedAt,
    title,
    message,
    category,
    sessionName,
    venue,
    status,
    priority,
    featured,
    featuredUntil
  }
`
