const path = require('path');
const config = require('./webpack.config.js');

config.devServer = {
  historyApiFallback: true, //serve a previous page on a 404 error
<<<<<<< HEAD
  //contentBase: path.resolve('src'), // location of the source code
=======
  // contentBase: path.resolve('src'), // location of the source code
>>>>>>> af42fd6f630774306b0e2ae1844044f94c3c6900
  port: 8080, // use this port for the server
  hot: true, // refresh the browser when changes are saved
  open: true, // open the project in the browser when the server starts
  host: '0.0.0.0', // make server accessible externally
<<<<<<< HEAD
  //watchContentBase: true, // watch for changes to static files
=======
  // watchContentBase: true, // watch for changes to static files
>>>>>>> af42fd6f630774306b0e2ae1844044f94c3c6900
};

config.devtool = 'inline-source-map'; // a tool to find errors in the compiled code, but show them against the source code for easier debugging

module.exports = config;
