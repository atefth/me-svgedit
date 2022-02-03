module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /[\\/]node_modules[\\/](?!(incompatible-module1|incompatible_module_2|some_other_nested_module)[\\/])/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  browsers: ['> 0.5%', ' last 2 versions', ' Firefox ESR',
                    ' not dead', ' IE 11']
                }
              }]
            ]
          }
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      }
    ],
  }
};
