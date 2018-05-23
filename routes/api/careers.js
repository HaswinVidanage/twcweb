var keystone = require('keystone'),
    Careers = keystone.list('Careers');

    exports.getCareers = function(req, res) {
       Careers.model.find({'state':'published'}).exec(function(err, items) {
     		if (err) return res.apiError('database error', err);
     		res.apiResponse({
     			careers: items
     		});

     	});
    }
