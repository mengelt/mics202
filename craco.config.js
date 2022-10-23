// CRACO (Create React App Configuration Override) is an easy and comprehensible configuration layer for create-react-app.
// https://github.com/gsoft-inc/craco

const webpack = require("webpack");

module.exports = {
  babel: {
    plugins: [
      [
        "babel-plugin-direct-import",
        {
          modules: [
            "@mui/lab",
            "@mui/material",
            "@mui/system",
            "@mui/icons-material",
            "react-feather",
          ],
        },
      ],
    ],
  },
  webpack: {
    configure: {
      // Webpack ≥5 no longer ships with Node.js polyfills by default.
      // Reference: https://webpack.js.org/blog/2020-10-10-webpack-5-release/#automatic-nodejs-polyfills-removed
      // Solution: https://github.com/facebook/create-react-app/issues/11756#issuecomment-1001769356
      resolve: {
        fallback: {
          buffer: require.resolve("buffer"),
          crypto: require.resolve("crypto-browserify"),
          process: require.resolve("process/browser"),
          stream: require.resolve("stream-browserify"),
          util: require.resolve("util"),
        },
      },
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
          process: "process/browser",
        }),
      ],
    },
  },
};
