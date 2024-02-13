/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt|xml)$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]",
      },
    });

    return config;
  },
  env: {},
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=63072000, must-revalidate",
          },
        ],
      },
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization, x-api-key",
          },
        ],
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      "storage.googleapis.com",
      "cdn.sanity.io",
      "via.placeholder.com",
      "i.ytimg.com",
      "social-mt5.tiomarkets.com",
      "chart.googleapis.com",
      "example.com",
      "forexview.s3.eu-central-1.amazonaws.com",
    ],
    dangerouslyAllowSVG: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    domains: [],
  },
  devIndicators: {
    buildActivityPosition: "bottom-left",
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: false,
  },
  reactStrictMode: false,
  swcMinify: true,
};

export default nextConfig;
