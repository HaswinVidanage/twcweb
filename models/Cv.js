var keystone = require('keystone');
var Types = keystone.Field.Types;

var Cv = new keystone.List('Cv', {
	nocreate: true,
	noedit: true,
});

Cv.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email, required: true },
	phone: { type: String },
	CvType: { type: Types.Select, options: [
		{ value: 'Demo-Request', label: 'Request A Demo' },
		{ value: 'Sales-Enquiry', label: 'Sales Enquiry' },
		{ value: 'Customer-Support', label: 'Customer Support' },
		{ value: 'Other', label: 'Something else...' },
	] },
	message: { type: Types.Markdown, required: true },
	createdAt: { type: Date, default: Date.now },
});

Cv.schema.pre('save', function (next) {
	this.wasNew = this.isNew;
	next();
});

Cv.schema.post('save', function () {
	if (this.wasNew) {
		this.sendNotificationEmail();
	}
});

Cv.schema.methods.sendNotificationEmail = function (callback) {
	if (typeof callback !== 'function') {
		callback = function (err) {
			if (err) {
				console.error('There was an error sending the notification email:', err);
			}
		};
	}

	if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
		console.log('Unable to send email - no mailgun credentials provided');
		return callback(new Error('could not find mailgun credentials'));
	}

	var cv = this;
	var brand = keystone.get('brand');

	keystone.list('User').model.find().where('isAdmin', true).exec(function (err, admins) {
		if (err) return callback(err);
		new keystone.Email({
			templateName: 'cv-notification',
			transport: 'mailgun',
		}).send({
			to: admins,
			from: {
				name: 'twcweb',
				email: 'contact@twcweb.com',
			},
			subject: 'New Cv for twcweb',
			cv: cv,
			brand: brand,
		}, callback);
	});
};

Cv.defaultSort = '-createdAt';
Cv.defaultColumns = 'name, email, cvType, createdAt';
Cv.register();
