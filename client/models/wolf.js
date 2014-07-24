var Model = require('ampersand-model');
var moment = require('moment');

module.exports = Model.extend({
	props: {
		id: 'string',
		username: 'string'
	}
});
