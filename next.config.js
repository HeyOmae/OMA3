const withPWA = require("next-pwa")

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
  trailingSlash: true,
  experimental: { esmExternals: true },
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = "cheap-module-source-map"
    }
    return config
  },
})
