/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'iadh-store-12237.eu.saleor.cloud',
            pathname: '**',
          }
        ]
    }
}

module.exports = nextConfig
