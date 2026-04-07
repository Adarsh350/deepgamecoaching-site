import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Adarsh Shankar | UAE Chess Champion & FIDE-Rated Coach',
  description: 'Meet Adarsh Shankar — multi-time UAE Abu Dhabi Cluster Chess Champion, FIDE-rated player, Lichess global top 6%. Private chess coach in Abu Dhabi and Dubai.',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
