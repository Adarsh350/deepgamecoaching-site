import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/coaching.html', destination: '/programs', permanent: true },
      { source: '/results.html', destination: '/success-stories', permanent: true },
      { source: '/contact.html', destination: '/book', permanent: true },
    ];
  },
};

export default nextConfig;
