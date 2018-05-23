var keystone = require('keystone');
var Cv = keystone.list('Cv');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'cv';
	locals.cvTypes = EnqCvuiry.fields.cvType.ops;
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.cvSubmitted = false;

	// On POST requests, add the CV to the database
	view.on('post', { action: 'cv' }, function (next) {

		var newCv = new Cv.model();
		var updater = newCv.getUpdateHandler(req);

		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, email, phone, cvType, message',
			errorMessage: 'There was a problem submitting your cv:',
		}, function (err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.cvSubmitted = true;
			}
			next();
		});
	});

	view.render('cv');
};
