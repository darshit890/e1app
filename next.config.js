/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public'
  })
  

const nextConfig = {
    images: {
        domains: ["cdn.sanity.io"],
    },
};

module.exports = withPWA(nextConfig)
