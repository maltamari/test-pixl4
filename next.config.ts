import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security: Hide the technology stack in HTTP headers
  poweredByHeader: false,

  images: {
    // Performance: enable modern image formats
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          }
          // Note: Full strict Content-Security-Policy (CSP) is intentionally omitted here 
          // because Framer Motion and GSAP require inline styles/scripts to compute animations.
          // Adding a strict general CSP without nonces would break visual functionality.
        ],
      },
    ];
  },
};

export default nextConfig;
