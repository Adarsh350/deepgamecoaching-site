import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://deepgamecoaching.com/#business',
      name: 'Deep Game Coaching',
      description: 'Private 1-on-1 chess coaching in Abu Dhabi and Dubai by Adarsh Shankar — UAE chess champion and FIDE-rated coach.',
      url: 'https://deepgamecoaching.com',
      telephone: '+971525203533',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Abu Dhabi',
        addressRegion: 'Abu Dhabi Emirate',
        addressCountry: 'AE',
      },
      areaServed: [
        { '@type': 'City', name: 'Abu Dhabi' },
        { '@type': 'City', name: 'Dubai' },
      ],
      serviceType: 'Chess Coaching',
      priceRange: '$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '5',
        bestRating: '5',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://deepgamecoaching.com/#coach',
      name: 'Adarsh Shankar',
      jobTitle: 'Chess Coach',
      description: 'Multi-time UAE Abu Dhabi Cluster Chess Champion, FIDE-rated player, Lichess global top 6% — coaching students from beginner to competitor level.',
      worksFor: { '@id': 'https://deepgamecoaching.com/#business' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Abu Dhabi',
        addressCountry: 'AE',
      },
      sameAs: [
        'https://lichess.org/@/Samaritan963',
        'https://deepgamecoaching.com',
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://deepgamecoaching.com/programs#foundations',
      name: 'Foundations Chess Coaching',
      description: 'Chess coaching for complete beginners — pieces, rules, tactics, and tournament preparation. Taught 1-on-1 by Adarsh Shankar.',
      provider: { '@id': 'https://deepgamecoaching.com/#business' },
      areaServed: ['Abu Dhabi', 'Dubai', 'Online Worldwide'],
      serviceType: 'Chess Coaching for Beginners',
    },
    {
      '@type': 'Service',
      '@id': 'https://deepgamecoaching.com/programs#development',
      name: 'Development Chess Coaching',
      description: 'Chess coaching for intermediate players — tactical improvement, tournament preparation, personalized training plan. 1-on-1 or small group (max 4).',
      provider: { '@id': 'https://deepgamecoaching.com/#business' },
      areaServed: ['Abu Dhabi', 'Dubai', 'Online Worldwide'],
      serviceType: 'Intermediate Chess Coaching',
    },
    {
      '@type': 'Service',
      '@id': 'https://deepgamecoaching.com/programs#mastery',
      name: 'Mastery Chess Coaching',
      description: 'Advanced chess coaching for competitive players — game analysis, opening preparation, tournament strategy from UAE championship level.',
      provider: { '@id': 'https://deepgamecoaching.com/#business' },
      areaServed: ['Abu Dhabi', 'Dubai', 'Online Worldwide'],
      serviceType: 'Advanced Competitive Chess Coaching',
    },
  ],
};

export const metadata: Metadata = {
  title: 'Chess Coaching UAE | Deep Game Coaching by Adarsh Shankar',
  description: 'Private 1-on-1 and small group chess coaching by Adarsh Shankar — UAE-based, for beginners, improvers, and competitors. Online or in person.',
  metadataBase: new URL('https://deepgamecoaching.com'),
  keywords: ['chess coaching UAE', 'chess lessons Abu Dhabi', 'chess coach Dubai', 'FIDE rated chess coach', 'private chess tutor UAE', 'chess lessons for beginners UAE', 'competitive chess training UAE', 'online chess coaching', 'chess coach for kids UAE'],
  openGraph: {
    title: 'Chess Coaching UAE | Deep Game Coaching by Adarsh Shankar',
    description: 'Private 1-on-1 chess coaching by Adarsh Shankar — UAE-based. Online or in person.',
    url: 'https://deepgamecoaching.com',
    type: 'website',
    images: [{ url: '/og-image.jpg' }],
    locale: 'en_AE',
    siteName: 'Deep Game Coaching',
  },
  twitter: { card: 'summary_large_image' },
  other: {
    'geo.region': 'AE-AZ',
    'geo.placename': 'Abu Dhabi, United Arab Emirates',
    'geo.position': '24.4539;54.3773',
    'ICBM': '24.4539, 54.3773',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main style={{ flex: 1 }}>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
