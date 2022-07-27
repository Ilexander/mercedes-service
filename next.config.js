/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: [
      "pngimg.com",
      "azurdrive.ru",
      "wallpaperaccess.com",
      "www.mercedes-benz.ua",
    ],
  },
};

module.exports = nextConfig;
