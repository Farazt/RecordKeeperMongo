var path =require ('path');
var webpack =require('webpack');

module.exports= {
	devtools: 'eval-source-map',
	
	entry: [
	'webpack-hot-middleware/client',
	 path.join(__dirname, '/client/index.js')],

	output: {
		path: '/',
		publicPath:'/'

	},
	plugins : [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
  		loaders:[
    	 {  
    		test: /\.js$/,
	        include: path.join(__dirname, 'client'),
	        exclude: /node_modules/,
      		loaders: ['react-hot','babel-loader']
      		
      		// Only run `.js` and `.jsx` files through Babel
     	}
     ]
 	},	
	resolve : {
		
		extensions: ["", ".js"]
	},
	node :{
		net : 'empty',
		dns : 'empty'
	}

}

