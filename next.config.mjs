import withBundleAnalyzer from "@next/bundle-analyzer"

const defineNextConfig = {
  // output: "export",
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "images.unsplash.com",
      "platform-lookaside.fbsbx.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(defineNextConfig)
