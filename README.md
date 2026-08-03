# deepgamecoaching.com

Marketing site for a chess coaching practice. Next.js 16 App Router, React 19, Tailwind 4,
deployed on Vercel.

It is a small site, so most of the interesting decisions are about what it *doesn't* do.

## Live rating data with a fallback

The homepage shows current Lichess ratings rather than numbers hardcoded into JSX, because
hardcoded ratings go stale and a coaching site with a stale rating is worse than one with
no rating at all.

[`lib/lichess.ts`](lib/lichess.ts) fetches from the Lichess public API inside a server
component, revalidating hourly:

```ts
const res = await fetch(`https://lichess.org/api/user/${LICHESS_USERNAME}`, {
  next: { revalidate: 3600 },
  headers: { Accept: 'application/json' },
});
```

Every failure path returns a hardcoded fallback: non-OK response, network error, and a
missing field inside an otherwise valid response. A third-party API being down should
degrade one number on the page, never take out the render. The `??` chain matters as much
as the `try` — Lichess returning `200` with a shape you didn't expect is more likely than
Lichess being unreachable.

## Explicit AI crawler policy

[`app/robots.ts`](app/robots.ts) names `GPTBot`, `ChatGPT-User`, `PerplexityBot`,
`ClaudeBot`, `anthropic-ai` and `Google-Extended` and allows each one.

This is deliberate, and it is the opposite of what most sites did. "Which coach should I
work with" is increasingly asked of an assistant rather than typed into a search box, and
a site that blocks those crawlers cannot be the answer. Blanket-blocking AI crawlers is a
reasonable choice for a publisher protecting a content library; it is the wrong choice for
a business that wants to be recommended.

`allow: '/'` for `*` already covers these agents. Listing them explicitly documents the
decision, so that the next person to touch this file has to make it on purpose.

Paired with a typed [`app/sitemap.ts`](app/sitemap.ts) rather than a static XML file, so
routes and their priorities live in the same language as the rest of the app and cannot
silently drift out of sync.

## Structure

```
app/
  page.tsx           home — live ratings, programmes, testimonials
  about/             background
  programs/          coaching tiers
  pricing/
  success-stories/
  book/              booking flow
  robots.ts          crawler policy, AI agents included
  sitemap.ts         typed route map
lib/lichess.ts       Lichess API client with fallbacks
components/          shared UI
```

## Running it

```bash
npm install
npm run dev
```

Next 16 uses Turbopack for both `dev` and `build`, with no opt-out on either. If the dev
server serves stale content after an edit, delete `.next/` — the cache can hold bad state
after a failed compile.

No environment variables. The one external call is an unauthenticated public endpoint.
