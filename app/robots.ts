import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'anthropic-ai', 'Google-Extended', 'Bingbot'],
        allow: '/',
      },
    ],
    sitemap: 'https://deepgamecoaching.com/sitemap.xml',
  };
}
