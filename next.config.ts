import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Use modern formats for smaller file sizes
    formats: ['image/avif', 'image/webp'],
    // Limit device sizes to reduce variant generation
    deviceSizes: [640, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Lower default quality for faster loads (still looks great)
    qualities: [75],
  },
};

export default nextConfig;
