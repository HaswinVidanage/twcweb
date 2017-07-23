var axios = require('axios');

const TWC_PORTFOLIO_API_URL ='/api/enquire';

module.exports = {
  postEnquiry:function(req){
    console.log(req.name);
    var requestUrl = `${TWC_PORTFOLIO_API_URL}`;
    console.log(requestUrl);
    return axios.post(requestUrl, {
        name: req.name,
        email: req.email,
        phone: req.phone,
        enquiryType : req.enquiryType,
        message : req.message
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
