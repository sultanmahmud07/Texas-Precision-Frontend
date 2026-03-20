import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "res.cloudinary.com",
      },
      {
        protocol: 'https',
        hostname: "images.unsplash.com",
      },
      {
        protocol: 'https',
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: 'https',
        hostname: "images.pexels.com",
      },
      {
        protocol: 'https',
        hostname: "t-power.s3.eu-north-1.amazonaws.com",
      },
      {
        protocol: 'https',
        hostname: "omo-oss-image.thefastimg.com",
      },
      {
        protocol: 'https',
        hostname: "www.transparenttextures.com",
      },
    ]
  }
};

export default nextConfig;
