var keystone = require('keystone'),
    Post = keystone.list('Post');

/**
 * List Tickets
 */
exports.getPosts = function(req, res) {
	// Post.model.find(function(err, items) {
  //
	// 	if (err) return res.apiError('database error', err);
  //
	// 	res.apiResponse({
	// 		posts: items
	// 	});
  //
	// });

  // keystone.list('Post').model.find().exec(function(err,	posts)	{
  //     console.log(posts);
  //     posts.populateRelated('users', function(err) {
  //       if (err) return res.apiError('database error', err);
  //
  //       res.apiResponse({
  //   			posts: posts
  //   		});
  //
  //     });
  //   });

    // Post.model.findOne().exec(function(err, post) {
    //   post.populateRelated('users', function(err) {
    //     // posts is populated
    //     console.log(post);
    //   });
    // });

  Post.model.find({'state':'published'}).populate('author categories', 'name email isAdmin').exec(function(err, posts) {
     if (err) return res.apiError('database error', err);
     res.apiResponse({
    		posts: posts
     });
   });
}

// /**
//  * Get Post by ID
//  */
exports.getPostByID = function(req, res) {
	Post.model.findOne({slug: req.params.id ,'state':'published' }).populate('author categories', 'name email isAdmin').exec(function(err, item) {

		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');

		res.apiResponse({
			post: item
		});

	});
}

//find by id
// exports.getPostByID = function(req, res) {
// 	Post.model.findById(req.params.id).exec(function(err, item) {
//
// 		if (err) return res.apiError('database error', err);
// 		if (!item) return res.apiError('not found');
//
// 		res.apiResponse({
// 			ticket: item
// 		});
//
// 	});


// /**
//  * Create a Ticket
//  */
// exports.createTicket = function(req, res) {
//
// 	var item = new Ticket.model(),
// 		data = req.body;
//
// 	item.getUpdateHandler(req).process(data, function(err) {
//
// 		if (err) return res.apiError('error', err);
//
// 		res.apiResponse({
// 			ticket: item
// 		});
//
// 	});
// }

// /**
//  * Update Ticket by ID
//  */
// exports.updateTicketById = function(req, res) {
// 	Ticket.model.findById(req.params.id).exec(function(err, item) {
//
// 		if (err) return res.apiError('database error', err);
// 		if (!item) return res.apiError('not found');
//
// 		var data = req.body;
//
// 		item.getUpdateHandler(req).process(data, function(err) {
//
// 			if (err) return res.apiError('create error', err);
//
// 			res.apiResponse({
// 				ticket: item
// 			});
//
// 		});
//
// 	});
// }
//
// /**
//  * Delete Ticket by ID
//  */
// exports.deleteTicketById = function(req, res) {
// 	Ticket.model.findById(req.params.id).exec(function (err, item) {
//
// 		if (err) return res.apiError('database error', err);
// 		if (!item) return res.apiError('not found');
//
// 		item.remove(function (err) {
// 			if (err) return res.apiError('database error', err);
//
// 			return res.apiResponse({
// 				success: true
// 			});
// 		});
//
// 	});
// }
