import type { Metadata } from 'next';
import SuccessStoriesPageClient from './SuccessStoriesPageClient';

export const metadata: Metadata = {
  title: 'Chess Coaching Results & Student Testimonials | Deep Game Coaching',
  description: 'Real results from real students. Ratings from 0 to 1900+, UAE Cluster Champions, and beginners who went from zero to tournament competitors under Adarsh Shankar.',
};

export default function SuccessStoriesPage() {
  return <SuccessStoriesPageClient />;
}
