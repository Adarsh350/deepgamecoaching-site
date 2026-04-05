import { getLichessRatings } from '@/lib/lichess';
import HomeClient from '@/components/HomeClient';

// Fetch live Lichess ratings server-side, revalidate every hour
export default async function HomePage() {
  const ratings = await getLichessRatings();
  return <HomeClient ratings={ratings} />;
}
