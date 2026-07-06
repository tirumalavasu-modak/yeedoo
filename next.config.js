module.exports = ({
  pageExtensions: ["tsx"],
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
        permanent: true,
      },
    ];
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
});
