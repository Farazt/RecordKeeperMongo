'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var jwt    = require('jsonwebtoken');
var controller = require('./api/users/controller');
var router = express.Router();
var webpackMiddleware =require('webpack-dev-middleware');
var webpackConfig =require('../webpack.config.dev');
var webpack =require('webpack');
var webpackHotMiddleware =require('webpack-hot-middleware');
//'mongodb://localhost:27017/activity_user'
mongoose.connect('mongodb://ftahir:root123@ds137100.mlab.com:37100/activity_user');

//create an express app
var app = express();
//configure the express app to parse JSON-formatted body
app.use(bodyParser.json());
app.use(express.static('public'));
require('./routes')(app);
//WebpackConfiguration
const compiler=webpack(webpackConfig)
app.use(webpackMiddleware(compiler,{
	hot: true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true

}));

app.use(webpackHotMiddleware(compiler));

app.get('/*',(req,res)=>{

	res.sendFile(path.join(__dirname,'./index.html'));

});

app.listen(8080,()=>{
	// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8080/");
});

