// This is required to automatically add the html file to the bundle
const HtmlWebpackPlugin = require("html-webpack-plugin");
// This is required to keep output styles in css files not in a js file
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    // To define the files used in dev mode
    app: "./students.js",
    appStyles: ["./mystyles.scss"],
  },
  output: {
    // To define the files we want to have after bundling
    filename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        // Loader for handling js files
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        // Loader for handling scss files
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        //Loader for handling css files
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
      //   hash: true, //No necessary if we use chunkhash in the output file
    }),
    //Generate styles in css files in /dist
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  //   To configure the default local server
  //   devServer: {
  //     port: 8081,
  //   },
};
