export interface LichessRatings {
  blitz: number;
  rapid: number;
  bullet: number;
}

const LICHESS_USERNAME = 'Samaritan963';

// Fallback values if the API is unreachable
const FALLBACK: LichessRatings = {
  blitz: 2101,
  rapid: 2264,
  bullet: 2000,
};

export async function getLichessRatings(): Promise<LichessRatings> {
  try {
    const res = await fetch(
      `https://lichess.org/api/user/${LICHESS_USERNAME}`,
      {
        next: { revalidate: 3600 }, // refresh at most once per hour
        headers: { Accept: 'application/json' },
      }
    );

    if (!res.ok) return FALLBACK;

    const data = await res.json();

    return {
      blitz: data.perfs?.blitz?.rating ?? FALLBACK.blitz,
      rapid: data.perfs?.rapid?.rating ?? FALLBACK.rapid,
      bullet: data.perfs?.bullet?.rating ?? FALLBACK.bullet,
    };
  } catch {
    return FALLBACK;
  }
}

export const LICHESS_PROFILE_URL = `https://lichess.org/@/${LICHESS_USERNAME}`;
export { LICHESS_USERNAME };
