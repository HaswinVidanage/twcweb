// /**
//  * Create a Enquiry
//  */
var keystone = require('keystone'),
    Enquiry = keystone.list('Enquiry');
exports.createEnquiry = function(req, res) {

	var item = new Enquiry.model(),
		data = req.body;

	item.getUpdateHandler(req).process(data,{
    fields: 'name, email, phone, enquiryType, message'
  },function(err) {
    console.log(data);
		if (err) return res.apiError('error', err);

		res.apiResponse({
			enquiries: item
		});

	});
}
