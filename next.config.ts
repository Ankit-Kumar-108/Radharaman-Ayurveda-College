import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Experimental Features
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', 
    },
  },

  // 2. Webpack Config (CRITICAL for PDF support)
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },

  // 3. Image Configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'izjllpgipljnttbffgmi.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default nextConfig;