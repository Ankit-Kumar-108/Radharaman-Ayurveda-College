import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      // Increase this to what you need (e.g., '5mb', '10mb', '50mb')
      bodySizeLimit: '10mb', 
    },
  },
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
  reactCompiler: true,
};

export default nextConfig;
