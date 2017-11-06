var keystone = require('keystone'),
    Project = keystone.list('Project');

    /**
     * List Projects
     */
    exports.getProjects = function(req, res) {
       Project.model.find({'state':'published'}).exec(function(err, items) {
     		if (err) return res.apiError('database error', err);
     		res.apiResponse({
     			projects: items
     		});

     	});

    	// Project.model.find(function(err, items) {
      //
    	// 	if (err) return res.apiError('database error', err);
      //
    	// 	res.apiResponse({
    	// 		projects: items
    	// 	});
      //
    	// });
    }
