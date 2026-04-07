import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Adarsh Shankar | UAE Chess Champion & FIDE-Rated Coach',
  description: 'Meet Adarsh Shankar — multi-time UAE Abu Dhabi Cluster Chess Champion, FIDE-rated player, Lichess global top 6%. Private chess coach in Abu Dhabi and Dubai.',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://deepgamecoaching.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://deepgamecoaching.com/about' },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AboutPageClient />
    </>
  );
}
