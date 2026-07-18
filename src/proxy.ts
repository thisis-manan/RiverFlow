import { NextResponse } from 'next/server'

import getOrCreateDB from './models/server/dbSetup'
import getOrCreateStorage from './models/server/storageSetup'

export async function proxy() {

    await Promise.all([
        getOrCreateDB(),
        getOrCreateStorage()
    ])
  return NextResponse.next()
}

export const config = {
  /* match all request paths except for the the ones that starts with:
  - api
  - _next/static
  - _next/image
  - favicon.com

  */
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}