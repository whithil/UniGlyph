import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* Configuration for static export to GitHub Pages */
  output: 'export',
  // If you are deploying to a sub-path (e.g. username.github.io/repo-name/),
  // uncomment the next line and set it to your repository name:
  // basePath: '/repo-name',
  
  images: {
    unoptimized: true, // Required for static export with next/image
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
