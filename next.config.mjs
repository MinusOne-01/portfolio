/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "citysync-uploads-2026.s3.eu-north-1.amazonaws.com",
      }
    ],
  },
};

export default nextConfig;
