/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avada.website", "kalanidhithemes.com"],
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
  compiler: {
    reactStrictMode: true,
    styledComponents: true,
  },
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
  },
};

export default nextConfig;
