var View = require('ampersand-view');
var WolfView = require('../views/wolf');
var templates = require('../templates');

module.exports = View.extend({
	template: templates.pages.wolves,
	initialize: function() {
		this.collection = app.wolves;
	},
	render: function() {
		this.renderWithTemplate();
		this.renderCollection(this.collection, WolfView, this.getByRole('wolves'));
	}
});
