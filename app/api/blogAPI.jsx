var axios = require('axios');

const TWC_PORTFOLIO_API_URL ='/api/posts';

module.exports = {
  getPosts:function(){
    var requestUrl = `${TWC_PORTFOLIO_API_URL}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        console.log('error fetching posts from api');
        throw new Error(res.data.message);
      } else {
        console.log('fetch success');
        console.log(res.data.posts);
        return res.data.posts;
      }

    },function(err){
      console.log('fetch error thrown');
      throw new Error(err.response.data.message);

    });
  }
}
