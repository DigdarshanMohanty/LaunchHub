'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { SessionProvider } from 'next-auth/react';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideNavbarRoutes = ['/login', '/signup', '/admin', '/auth/callback'];

  const showNavbar = !hideNavbarRoutes.some(route => pathname.startsWith(route));

  return (
    <>
      {showNavbar && <Navbar />}
      <SessionProvider>{children}</SessionProvider>
    </>
  );
}
