var axios = require('axios');

const TWC_CAREERS_API_URL ='/api/careers';

module.exports = {
  getProjects:function(){
    var requestUrl = `${TWC_CAREERS_API_URL}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        console.log('error fetching projects from api');
        throw new Error(res.data.message);
      } else {
        console.log('fetch success');
        console.log(res.data.careers);
        return res.data.careers;
      }

    },function(err){
      console.log('fetch error thrown');
      throw new Error(err.response.data.message);

    });
  }
}
