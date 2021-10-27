import type { NextFetchEvent } from 'next/server'

export function middleware(request: Request, event: NextFetchEvent) {
  console.log('Hello ' + request.url)
  console.log('event', event)
}
