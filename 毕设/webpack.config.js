module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js[x]?$/, use: 'babel-loader?presets[]=es2015&presets[]=react'}
    ]
    // loaders:[
    //   {
    //     test: /\.js[x]?$/,
    //     exclude: /node_modules/,
    //     loader: 'babel-loader?presets[]=es2015&presets[]=react'
    //   },
    // ]
  }
}