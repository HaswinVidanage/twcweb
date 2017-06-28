var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Project/ Portfolio Model
 * ==========
 */

var Project  = new keystone.List('Project', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Project.add({
	title: { type: String, required: true },
  categories: { type: Types.Relationship, ref: 'ProjectCategory', many: true },
  url: {type: Types.Url},
	thumbnailDesktop: { type: Types.CloudinaryImage },
  thumbnailTablet: { type: Types.CloudinaryImage },
  thumbnailMobile: { type: Types.CloudinaryImage },
	description: { type: Types.Textarea,  height: 400 },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },	
});

Project.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Project.defaultColumns = 'title, url|20%, state|20%, author|20%, publishedDate|20%';
Project.register();
