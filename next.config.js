// @ts-check

/** @type {import('next').NextConfig} */
export default {
  experimental: {
    scrollRestoration: true,
  },
  redirects: async () => [
    {
      source: '/:path+/',
      destination: '/:path+',
      permanent: true,
    },
  ],
}
