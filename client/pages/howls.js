var View = require('ampersand-view');
var HowlView = require('../views/howl');
var templates = require('../templates');

module.exports = View.extend({
	template: templates.pages.howls,
	initialize: function() {
		this.collection = app.howls;
	},
	render: function() {
		this.renderWithTemplate();
		this.renderCollection(this.collection, HowlView, this.getByRole('howls'));
	}
});
