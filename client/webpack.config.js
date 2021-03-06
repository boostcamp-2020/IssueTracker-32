const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const apiMocker = require('connect-api-mocker');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@api': path.resolve(__dirname, 'src/api'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@Common': path.resolve(__dirname, 'src/components/Common'),
      '@IssuePage': path.resolve(__dirname, 'src/components/IssuePage'),
      '@NewIssuePage': path.resolve(__dirname, 'src/components/NewIssuePage'),
      '@IssueDetailPage': path.resolve(__dirname, 'src/components/IssueDetailPage'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 8000,
    overlay: true,
    historyApiFallback: true,
    hot: true,
    before: (app, server, compiler) => {
      app.use(apiMocker('/mock/api', 'mocks/api'));
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new webpack.DefinePlugin({
      API_BASE:
        process.env.MOCK === 'true' && process.env.NODE_ENV === 'development'
          ? JSON.stringify('http://localhost:8000/mock/api')
          : process.env.NODE_ENV === 'development'
          ? JSON.stringify('http://localhost:3000')
          : JSON.stringify('http://101.101.217.169/api'),
    }),
  ],
};
