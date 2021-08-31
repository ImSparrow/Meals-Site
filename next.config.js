const webpack = require("webpack");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["www.themealdb.com"],
  },
  entry: "./src/index.js",
  module: {
    rules: [
      //...
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  //...
};
