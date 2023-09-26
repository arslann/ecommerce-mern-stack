/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.hizliresim.com"],
  },
  async redirects() {
    return [
      // With parameter and custom status code
      {
        source: "/category/:id",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
