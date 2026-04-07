import type { Metadata } from 'next';
import BookPageClient from './BookPageClient';

export const metadata: Metadata = {
  title: 'Book a Chess Coaching Session | Deep Game Coaching Abu Dhabi',
  description: 'Book a free 20-minute intro call with Adarsh Shankar. Online or in-person chess coaching in Abu Dhabi and Dubai. No commitment — just chess.',
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Book a Chess Coaching Session with Adarsh Shankar',
  description: 'Book a free 20-minute intro call with Adarsh Shankar — UAE chess champion and FIDE-rated coach based in Abu Dhabi.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Message Adarsh on WhatsApp',
      text: 'Reach out directly via WhatsApp to say you\'re interested. Adarsh will respond personally and help you schedule a free 20-minute intro call at a time that works for you.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Talk about your goals',
      text: 'On the intro call, Adarsh will learn about your current level, what you want to achieve, and how you learn best. There\'s no pitch — just an honest conversation about whether coaching makes sense for you.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Start coaching',
      text: 'If it\'s a good fit, you\'ll schedule your first session and get started. Sessions are structured from day one — no wasted time.',
    },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://deepgamecoaching.com' },
    { '@type': 'ListItem', position: 2, name: 'Book a Call', item: 'https://deepgamecoaching.com/book' },
  ],
};

export default function BookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BookPageClient />
    </>
  );
}
