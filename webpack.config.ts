import * as webpack from 'webpack';
import * as path from 'path';
import HtmlWebpackPlugin = require("html-webpack-plugin");

const entry: webpack.Entry = {
  'react-typescript-template-app': path.resolve(__dirname, './src/app.tsx')
};

const output: webpack.Output = {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, './dist')
};

const module: webpack.Module = {
  rules: [
    {
      test: /\.(ts|tsx)$/,
      use: 'ts-loader'
    }
  ]
};

const resolve: webpack.Resolve = {
  extensions: [
    '.js',
    '.ts',
    '.tsx',
    '.css'
  ],
};

const plugins: webpack.Plugin[] = [
  new HtmlWebpackPlugin({
    template: 'public/index.html'
  })
];

const config: webpack.Configuration[] = [
  {
    entry: entry,
    output: output,
    module: module,
    resolve: resolve,
    plugins: plugins
  }
];

export default config;
