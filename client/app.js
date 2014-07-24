var domready = require('domready');
var MainView = require('./views/main');
var Router = require('./router');
var Howls = require('./models/howls');
var Wolves = require('./models/wolves');
var Me = require('./models/me');

window.app = {
	init: function() {
		var self = this;

		self.me = new Me();

		self.howls = new Howls();
		self.howls.fetch();
		setInterval(function() {
			self.howls.fetch();
		}, 5000);

		self.wolves = new Wolves();
		self.wolves.fetch();
		setInterval(function() {
			self.wolves.fetch();
		}, 5000);

		self.router = new Router();

		domready(function() {
			self.view = new MainView({
				el: document.body
			});
			self.router.history.start({
				pushState: true
			});
			console.log("Awoooooo!");
		});
	}
};

app.init();
