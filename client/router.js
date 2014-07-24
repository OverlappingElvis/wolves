var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var HowlsPage = require('./pages/howls');
var WolvesPage = require('./pages/wolves');
var querystring = require('querystring');

module.exports = Router.extend({
	routes: {
		'': 'home',
		'howls': 'howls',
		'wolves': 'wolves',
		'auth/login': 'login',
		'auth/callback': 'authCallback'
	},
	home: function() {
		this.trigger('page', new HomePage());
	},
	howls: function() {
		this.trigger('page', new HowlsPage());
	},
	wolves: function() {
		this.trigger('page', new WolvesPage());
	},
	login: function() {
		window.location = 'http://wolves.technology/authorize?redirect_uri=' + encodeURIComponent(window.location.origin + '/auth/callback');
	},
	authCallback: function() {
		app.me.access_token = querystring.parse(window.location.hash.substr(1)).access_token;
		this.redirectTo('/howls');
	}
});
