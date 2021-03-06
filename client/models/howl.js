var Model = require('ampersand-model');
var moment = require('moment');

module.exports = Model.extend({
	props: {
		id: 'string',
		content: 'string',
		createdAt: 'date'
	},
	derived: {
		parsedCreatedAt: {
			deps: ['createdAt'],
			fn: function() {
				return moment(this.createdAt).fromNow();
			}
		}
	}
});
