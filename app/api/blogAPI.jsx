var axios = require('axios');

const TWC_POSTS_API_URL ='https://twcwebs.herokuapp.com/api/posts';
module.exports = {
  getPosts:function(){
    var requestUrl = `${TWC_POSTS_API_URL}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        console.log('error fetching posts from api');
        throw new Error(res.data.message);
      } else {
        return res.data.posts;
      }

    },function(err){
      console.log('fetch error thrown');
      throw new Error(err.response.data.message);

    });
  },

  getPostsBySlug:function(slug){
    var requestUrl = `http://twcwebs.herokuapp.com/api/posts/${slug}`;
    console.log('requestUrl', requestUrl);

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        console.log('error fetching post from api');
        throw new Error(res.data.message);
      } else {
        console.log(res.data.post);
        return res.data.post;
      }

    },function(err){
      console.log('fetch error thrown');
      throw new Error(err.response.data.message);

    });
  }
}
