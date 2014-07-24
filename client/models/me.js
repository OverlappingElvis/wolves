var Model = require('ampersand-model');

module.exports = Model.extend({
	initialize: function() {
		var self = this;
		this.accessToken = localStorage.wolvesAccessToken;
		self.on('change:accessToken', function() {
			if (self.accessToken) {
				localStorage.wolvesAccessToken = self.accessToken;
			} else {
				delete localStorage.wolvesAccessToken;
			}
		});
	},
	props: {
		id: 'string',
		username: 'string'
	},
	session: {
		accessToken: 'string'
	}
});
