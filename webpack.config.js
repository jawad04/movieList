const path = require('path');

module.exports = {
  entry: './client/src/index.js', // where should webpack start looking for files
  output: { // where should the webpack put the bundle
    path: path.resolve(__dirname, 'client/dist'), // what folder?
    filename: 'bundle.js'
  }, // webpack will put our bundle at /dist/bundle.js
	  module: {
	  rules: [
	    {
	      test: /\.jsx?$/, // which files should this loader run on? regular expression that means js or jsx
	      exclude: /(node_modules)/, // dont' transpile node_modules
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['@babel/preset-env', '@babel/preset-react'] // it translates ES6 to ES5
	        }
	      }
	    }
	  ]
	},
	mode: 'development',
};