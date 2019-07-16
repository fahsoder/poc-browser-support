const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "App.js"),
    browserDetect: path.resolve(__dirname, "browserDetect.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')      
    })
  ],
  module: {
      rules: [
        {
            test: /(\.jsx?)($|(\?.+))/i,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {
              configFile: path.join(__dirname, 'babel.config.js')
            }
          }
      
      ]
  }
};
