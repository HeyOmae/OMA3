import withBundleAnalyzer from "@next/bundle-analyzer"
import nextPWA from "next-pwa"
import runtimeCaching from "next-pwa/cache.js"

const withPWA = nextPWA({
  dest: "public",
  runtimeCaching,
  disable: process.env.NODE_ENV === "development",
})

const defineNextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "images.unsplash.com",
      "platform-lookaside.fbsbx.com",
    ],
  },
}

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(withPWA(defineNextConfig))
