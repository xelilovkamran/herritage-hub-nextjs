/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.codart.nl",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
