var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
	template: templates.includes.wolf,
	bindings: {
		'model.username': '[role=username]'
	}
});
