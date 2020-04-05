const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: [
    "./src/resources/scss/app.scss",
    "./src/resources/scss/news/news.scss",
  ],
  output: {
    path: path.resolve(__dirname, "src", "public"),
    filename: "app.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "app.css",
    }),
  ],
};
