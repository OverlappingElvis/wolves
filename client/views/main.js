var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');
var dom = require('ampersand-dom');
var templates = require('../templates');

module.exports = View.extend({
	template: templates.body,
	autoRender: true,
	events: {
		'click a[href]': 'handleLinkClick'
	},
	initialize: function() {
		this.listenTo(app.router, 'page', this.handlePage);
	},
	render: function() {
		this.renderWithTemplate();
		this.pages = new ViewSwitcher(this.getByRole('page-container'));
	},
	handlePage: function(pageView) {
		this.pages.set(pageView);
		this.setActiveNavItem();
	},
	handleLinkClick: function(e) {
		var target = e.target;
		if (target.host === location.host && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
			e.preventDefault();
			app.router.history.navigate(target.pathname, { trigger: true });
		}
	},
	setActiveNavItem: function() {
		var path = window.location.pathname;
		this.getAll('[role=nav-items] a').forEach(function(link) {
			if (link.pathname === path) {
				dom.addClass(link.parentNode, 'active');
			} else {
				dom.removeClass(link.parentNode, 'active');
			}
		});

	}
});
