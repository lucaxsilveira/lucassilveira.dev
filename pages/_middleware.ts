import type { NextFetchEvent } from 'next/server'

export function middleware(request: Request, event: NextFetchEvent) {
  // eslint-disable-next-line
  console.log('Hello ' + request.url)
  // eslint-disable-next-line
  console.log('event', event)
}
