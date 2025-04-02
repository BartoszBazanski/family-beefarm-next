const { withPayload } = require("@payloadcms/next/withPayload");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/*'
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/placeholder/:path*',
        destination: 'https://placehold.co/:path*'
      }
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack']
    });

    return config;
  }
};

module.exports = withPayload(nextConfig)
