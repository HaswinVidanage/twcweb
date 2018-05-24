var keystone = require('keystone'),
    Cv = keystone.list('Cv');
exports.createCv = function(req, res) {

	var item = new Cv.model(),
		data = req.body;

	item.getUpdateHandler(req).process(data,{
    fields: 'name, email, phone, job, file'
  },function(err) {
    console.log(data);
		if (err) return res.apiError('error', err);

		res.apiResponse({
			cv: item
		});

	});
}
