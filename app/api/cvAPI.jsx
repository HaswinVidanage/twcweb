var axios = require('axios');

const TWC_PORTFOLIO_API_URL ='/api/cv';

module.exports = {
  postCv:function(req){
    console.log(req.name);
    var requestUrl = `${TWC_PORTFOLIO_API_URL}`;
    console.log(requestUrl);
    console.log('CV API');
    return axios.post(requestUrl, {
        name: req.name,
        email: req.email,
        phone: req.phone,
        job : req.job,
        file : req.file
      })
      .then(function (response) {
        console.log(response);

      })
      .catch(function (error) {
        console.log(error);
        throw new Error(error);
      });


  }
}
