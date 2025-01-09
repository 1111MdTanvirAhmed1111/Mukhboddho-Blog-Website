/** @type {import('next').NextConfig} */
const nextConfig = {
  ssg: false, // means build time the pages wont generate static html, only runtime with ISR
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
