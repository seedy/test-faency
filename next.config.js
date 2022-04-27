const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules/react')
    }
  }
}

module.exports = nextConfig
