// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const basicAuth = request.headers.get('authorization');
  const url = request.nextUrl;

  if (url.pathname.startsWith('/studio')) {
    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, pass] = atob(authValue).split(':');
      if (user === 'admin' && pass === process.env.STUDIO_PASSWORD) {
        return NextResponse.next();
      }
    }

    return new NextResponse('Auth Required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}
