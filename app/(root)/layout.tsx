// app/layout.tsx
import '../globals.css';
import ClientLayoutWrapper from './ClientLayoutWrapper';

export const metadata = {
  title: 'LaunchHub',
  description: 'Connect, Pitch, and Launch Your Startup',
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
  );
}
