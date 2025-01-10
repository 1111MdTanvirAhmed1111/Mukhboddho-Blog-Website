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


};

export default nextConfig;
