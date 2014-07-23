var products = require('../models/products.js');

var controller = {

	index: function(req, res) {
		res.render('index', {
			// Use object literal rather than pass
			// 'products'; easier to maintain
			teaProducts: products
		});
	}

}

module.exports = controller;