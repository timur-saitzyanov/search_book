const isProductionMode = process.env.NODE_ENV === "production";
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const loader = require('sass-loader');
require("babel-core/register");
require("babel-polyfill");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");


let mode = "development";
let target = 'web';
if (process.env.NODE_ENV === "production") {
  mode = 'production';
  target = 'browserslist';
}

module.exports = {
  mode: mode,
  target: target,
  entry: {
    // index: {
    //     import: './src/js/index.js', filename: 'js/[name][contenthash].js',
    // },
    // print: {
    //     import: './src/js/print.js', filename: 'js/[name][contenthash].js',
    // },
    main: ['babel-polyfill', './src/js/main.js'

    ],
  },

  devtool: isProductionMode ? false : 'inline-source-map',  //eval-source-map
  devServer: {
    port: 8000,
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      // minify: false,
    }),
    new HtmlWebpackPugPlugin({

    }),
    new MiniCssExtractPlugin({
      linkType: false,
      filename: isProductionMode ? "style/[name][contenthash].css" : "style.css",
    }),
    new CopyPlugin({
      patterns: [
        // { from: "./src/images", to: "images" },
        { from: "./src/app/fonts", to: "fonts" },

        //         // { from: './src/docs', to: 'docs'},
        //         // { from: './src/php', to: 'php'},
        //         // // { from: "other", to: "public" },
      ],
    }),

  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "images/[hash][ext][query]",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          (isProductionMode ? {
            loader: MiniCssExtractPlugin.loader,
            options: {
              //publicPath: path.resolve('dist/style'),
            }
          } : 'style-loader'),
          'css-loader', 'postcss-loader',
          "sass-loader"
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|webp|jpeg|mp4|mp3)$/i,
        type: 'asset/inline',
        exclude: /node_modules/,
      },
      {
        test: /\.(gif)$/i,
        type: 'asset/inline',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|doc|docx|rtf|svg|png)$/i,
        type: 'asset/inline',
        exclude: /node_modules/,
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
        exclude: /node_modules/,
      },
    ],

  },
  optimization: {
    // runtimeChunk: "single",
    minimize: isProductionMode,
    nodeEnv: 'production',
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin(),
      // new ImageMinimizerPlugin({
      //   minimizer: {
      //     implementation: ImageMinimizerPlugin.imageminMinify,
      //     options: {
      //       // Lossless optimization with custom option
      //       // Feel free to experiment with options for better result for you
      //       plugins: [
      //         ["gifsicle", { interlaced: true }],
      //         ["jpegtran", { progressive: true }],
      //         ["optipng", { optimizationLevel: 5 }]]
      //     }
      //   }
      // }),
    ],
  },
};
