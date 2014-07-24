var Collection = require('ampersand-rest-collection');
var Wolf = require('./wolf');

module.exports = Collection.extend({
	model: Wolf,
	url: 'http://wolves.technology/wolves'
})
