import type { NextFetchEvent } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(event: NextFetchEvent) {
  const country = event.request.geo?.country?.toLowerCase() || 'us'

  console.log('country', country)

  return event.respondWith(NextResponse.rewrite(`/edge/${country}`))
}
