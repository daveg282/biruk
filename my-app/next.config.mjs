/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Keep this
  images: {
    unoptimized: true, // Add this line
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**'
      }
    ]
  },
  trailingSlash: true,
  // Add this for production debugging:
  productionBrowserSourceMaps: true 
}

export default nextConfig