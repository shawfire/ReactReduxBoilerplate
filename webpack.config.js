module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
					test: /\.js$/,
					exclude: /(node_modules)/,
					loader: ['babel'],
					query: {
							presets: ['latest', 'stage-0', 'react']
					}
			},
			{
					test: /\.json$/,
					exclude: /(node_modules)/,
					loader: 'json-loader'
			},
			{
					test: /\.css$/,
					loader: 'style-loader!css-loader!autoprefixer-loader'

			},
			{
					test: /\.scss/,
					loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
			}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
