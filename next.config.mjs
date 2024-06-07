import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.shopify.com',
        protocol: 'https'
      }
    ]
  }
};

export default bundleAnalyzer(nextConfig);
