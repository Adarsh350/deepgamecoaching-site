import type { Metadata } from 'next';
import PricingPageClient from './PricingPageClient';

export const metadata: Metadata = {
  title: 'Chess Coaching Pricing Abu Dhabi & Dubai | Deep Game Coaching',
  description: 'Chess coaching rates in Abu Dhabi and Dubai. 1-on-1 private sessions from 150 AED/hr. Group classes from 110 AED/hr. Free 20-minute intro call. Online worldwide.',
};

const pricingJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does chess coaching cost in Abu Dhabi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Deep Game Coaching offers 1-on-1 private sessions at 150 AED per hour and group sessions (max 4 students) at 110 AED per hour. A single trial session is available at 100 AED with no commitment. Package discounts of up to 20% are available.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a free trial for chess coaching?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Adarsh Shankar offers a free 20-minute intro call via WhatsApp with no commitment. A paid trial session (one full session) is also available at 100 AED — if you then book a package, this trial session counts as session one.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is included in each chess coaching session?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every session is taught personally by Adarsh Shankar — no assistants or substitutes. Sessions include game review, structured training on your specific weaknesses, opening preparation tailored to your style, and session notes. Online sessions include game recordings.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer chess coaching for schools and corporate groups?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Adarsh Shankar offers chess coaching for schools and corporate groups in Abu Dhabi and Dubai. Pricing and format are custom — contact via WhatsApp to discuss your requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is online chess coaching available internationally?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Online sessions are available to students worldwide via WhatsApp video, Zoom, or Google Meet. Adarsh has coached students in the UAE, India, and the United States.',
          },
        },
      ],
    },
    {
      '@type': 'Offer',
      name: 'Trial Chess Coaching Session',
      description: 'Single trial chess coaching session with Adarsh Shankar. No commitment. Counts as session one if you book a package.',
      price: '100',
      priceCurrency: 'AED',
      seller: { '@id': 'https://deepgamecoaching.com/#business' },
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: '1-on-1 Private Chess Coaching — Per Session',
      description: 'One-on-one private chess coaching session with Adarsh Shankar. 60 minutes. Online or in-person (Abu Dhabi / Dubai).',
      price: '150',
      priceCurrency: 'AED',
      seller: { '@id': 'https://deepgamecoaching.com/#business' },
    },
    {
      '@type': 'Offer',
      name: 'Group Chess Coaching — Per Session',
      description: 'Small group chess coaching session with Adarsh Shankar. Maximum 4 students. 60 minutes. Online or in-person.',
      price: '110',
      priceCurrency: 'AED',
      seller: { '@id': 'https://deepgamecoaching.com/#business' },
    },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://deepgamecoaching.com' },
    { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://deepgamecoaching.com/pricing' },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PricingPageClient />
    </>
  );
}
