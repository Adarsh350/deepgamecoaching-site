import type { Metadata } from 'next';
import SuccessStoriesPageClient from './SuccessStoriesPageClient';

export const metadata: Metadata = {
  title: 'Chess Coaching Results & Student Testimonials | Deep Game Coaching',
  description: 'Real results from real students. Ratings from 0 to 1900+, UAE Cluster Champions, and beginners who went from zero to tournament competitors under Adarsh Shankar.',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://deepgamecoaching.com' },
    { '@type': 'ListItem', position: 2, name: 'Success Stories', item: 'https://deepgamecoaching.com/success-stories' },
  ],
};

const reviewsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Student Reviews — Deep Game Coaching by Adarsh Shankar',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Sharanya Mathur' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: "I have spent over 7 years training with Adarsh and he's been both an excellent coach and an immense support for me. When we started I knew nothing at all about chess and now I'm rated over 1900 on Lichess, one of the organizers at Bangalore Chess Club and actively playing and even winning local tournaments.",
        itemReviewed: { '@id': 'https://deepgamecoaching.com/#business' },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Anchal Gupta' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: "I had Adarsh train me while I was competing for the Girls U14 UAE Clusters and U19 UAE Cluster and won both events. He is an excellent chess coach but even a better tournament strategist. He helped me develop my game by making my strengths stronger and it was very focused individual attention even in a group class.",
        itemReviewed: { '@id': 'https://deepgamecoaching.com/#business' },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Dr. Yogesh Shastri' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: "Adarsh provided chess coaching for my 6 year old son. He worked with him for a year and after his coaching he has been winning tournaments at school and is very happy and excited to play chess even more than before. He did one-on-one coaching with my son and my son has since improved leaps and bounds.",
        itemReviewed: { '@id': 'https://deepgamecoaching.com/#business' },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Amritanshi Saxena' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: "Adarsh is an extremely talented chess player but I would say his bigger strength is coaching. He is the most patient coach I have worked with and my rating has improved from 700 to 1500 in 1 year under his coaching.",
        itemReviewed: { '@id': 'https://deepgamecoaching.com/#business' },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Jonathan Figy' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: "I had Adarsh train me for both the U14 Mixed and U19 Mixed UAE Chess Tournaments and under his coaching I was able to bag prizes in all 4 years that I competed. His approach to tactics and developing your own style of play is something I haven't seen anywhere else.",
        itemReviewed: { '@id': 'https://deepgamecoaching.com/#business' },
      },
    },
  ],
};

export default function SuccessStoriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
      <SuccessStoriesPageClient />
    </>
  );
}
