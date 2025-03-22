/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages deploys to a subdirectory by default
  // If your repo is username.github.io, you can remove this
  basePath: '@Goodnbadexe/Masarat-Events',
  // Disable server features
  experimental: {
    appDir: true,
  }
};

export default nextConfig;

