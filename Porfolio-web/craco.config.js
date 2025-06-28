const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  webpack: {
    plugins: [
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        emitWarning: true,
        failOnError: false,
      }),
    ],
  },
  style: {
    postcssOptions: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};