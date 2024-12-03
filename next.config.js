/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scintillating-gull-978.convex.cloud',
      },
    ],
  },
};

module.exports = nextConfig;
