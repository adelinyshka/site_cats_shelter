module.exports = {
    plugins: [
      require('autoprefixer'),
      require('css-mqpacker'),
      require('cssnano'),
      require('postcss-normalize')({
        preset: [
          'default', {
            discardComments: {
              removeAll: true,
            }
          }
        ]
      })
    ]
  }