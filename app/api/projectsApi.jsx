var axios = require('axios');

const TWC_PORTFOLIO_API_URL ='http://localhost:3000/api/projects/';

module.exports = {
  getProjects:function(){
    var requestUrl = `${TWC_PORTFOLIO_API_URL}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        console.log('error fetching projects from api');
        throw new Error(res.data.message);
      } else {
        console.log('fetch success');
        console.log(res.data.projects);
        return res.data.projects;
      }

    },function(err){
      console.log('fetch error thrown');
      throw new Error(err.response.data.message);

    });
  }
}
