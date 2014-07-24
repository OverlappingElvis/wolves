var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
	template: templates.includes.howl,
	bindings: {
		'model.content': '[role=content]',
		'model.parsedCreatedAt': '[role=createdAt]'
	}
});
