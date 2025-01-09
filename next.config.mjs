/** @type {import('next').NextConfig} */
const nextConfig = {
  ssg: false, // Means build time the pages won't generate static HTML, only runtime with ISR
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Disable caching for all pages and assets
  async headers() {
    return [
      {
        source: '/:path*',  // Apply to all routes
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate',  // Disable caching
          },
          {
            key: 'Pragma',
            value: 'no-cache',  // Legacy HTTP/1.0 header to disable caching
          },
          {
            key: 'Expires',
            value: '0',  // Expire immediately
          },
        ],
      },
    ];
  },
};

export default nextConfig;
