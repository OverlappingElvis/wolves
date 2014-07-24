var hapi = require('hapi');
var moonboots = require('moonboots_hapi');
var server = hapi.createServer(8080, 'localhost');
var config = require('getconfig');

server.pack.register({
	plugin: moonboots,
	options: {
		appPath: '/{p*}',
		moonboots: {
			main: __dirname + '/client/app.js',
			developmentMode: config.isDev,
			scripts: [],
			stylesheets: [
				__dirname + '/public/css/bootstrap.css'
			]
		}
	}
}, function() {
	server.start();
	console.log('started wolves...');
});
