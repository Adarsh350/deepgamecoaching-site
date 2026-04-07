import type { Metadata } from 'next';
import ProgramsPageClient from './ProgramsPageClient';

export const metadata: Metadata = {
  title: 'Chess Coaching Programs Abu Dhabi & Dubai | Deep Game Coaching',
  description: 'Three structured chess coaching programs for all levels — Foundations, Development, and Mastery. 1-on-1 and small group sessions with Adarsh Shankar. Online or in-person.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does chess coaching cost in Abu Dhabi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Adarsh Shankar offers private 1-on-1 chess coaching and small group sessions (maximum 4 students) in Abu Dhabi and Dubai. Pricing is discussed directly during the free 20-minute intro call, which has no commitment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is online chess coaching as effective as in-person?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Adarsh conducts online sessions via WhatsApp video, Zoom, or Google Meet with full session notes and game recordings. Students across India, the USA, and UAE have achieved significant rating gains through online coaching.',
      },
    },
    {
      '@type': 'Question',
      name: 'What level do I need to be to start chess coaching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No experience is required. The Foundations program starts from the very basics — pieces, rules, and first moves. Adarsh coaches complete beginners through to UAE tournament competitors.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long before I see improvement in my chess rating?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Results vary by starting level and session frequency. One student improved from 700 to 1500 on Lichess in one year. A 6-year-old student went from zero experience to winning school tournaments within a year of coaching.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Adarsh coach children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Adarsh coaches students of all ages, including young children. A parent reported their 6-year-old son won school tournaments after one year of 1-on-1 coaching with Adarsh.',
      },
    },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://deepgamecoaching.com' },
    { '@type': 'ListItem', position: 2, name: 'Programs', item: 'https://deepgamecoaching.com/programs' },
  ],
};

export default function ProgramsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProgramsPageClient />
    </>
  );
}
