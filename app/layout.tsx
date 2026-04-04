import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Chess Coaching UAE | Deep Game Coaching by Adarsh Shankar',
  description: 'Private 1-on-1 and small group chess coaching (max 4 students) by Adarsh Shankar — UAE-based, for beginners, improvers, and competitors. Online or in person.',
  metadataBase: new URL('https://deepgamecoaching.com'),
  openGraph: {
    title: 'Chess Coaching UAE | Deep Game Coaching by Adarsh Shankar',
    description: 'Private 1-on-1 chess coaching by Adarsh Shankar — UAE-based. Online or in person.',
    url: 'https://deepgamecoaching.com',
    type: 'website',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Nav />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
