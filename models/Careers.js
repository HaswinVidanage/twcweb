var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Careers Model
 * ==========
 */

var Careers  = new keystone.List('Careers', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Careers.add({
	title: { type: String, required: true },
	description: { type: Types.Textarea,  height: 400 },
	requirements: { type: Types.Textarea,  height: 100 },
	salary: { type: Types.Textarea,  height: 50 },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
});

Careers.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Careers.defaultColumns = 'title, url|20%, state|20%, author|20%, publishedDate|20%';
Careers.register();
