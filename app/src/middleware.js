import { NextResponse } from 'next/server'

export function middleware(request) {}

// ROUTES MATCHER REDIRECT
// export function middleware(request) {
//   if (!['/login', '/dashboard', 'profile'].includes(request.nextUrl.pathname)) {;
//     return NextResponse.redirect(new URL('/dashboard', request.url));
//   }
// }

// export const config = {
//   matcher: '',
// }

// ####

// CONDITIONAL STATEMENTS REDIRECT
// export function middleware(request) {
//     if (request.nextUrl.pathname === '/profile') {
//         return NextResponse.redirect(new URL('/dashboard', request.url));
//     }
// }

// ####

// CONDITIONAL STATEMENTS REDIRECT
// export function middleware(request) {
//     if (!['/dashboard', '/user', '/profile'].includes(request.nextUrl.pathname)) {
//         return NextResponse.redirect(new URL('/dashboard', request.url));
//     }
// }

// ####

// CONDITIONAL STATEMENTS REDIRECT
// export function middleware(request) {
//     const { user } = useAuth();
//     if (request.nextUrl.pathname === '/profile') {
//         return NextResponse.redirect(new URL('/dashboard', request.url));
//     }
// }
