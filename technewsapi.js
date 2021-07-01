function fetchNews(){
    var request = require("request");

    var options = { method: 'GET',
      url: 'https://hacker-news.firebaseio.com/v0/topstories.json',
      qs: { print: 'pretty' },
      body: '{}' };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
    });
}
module.exports = {fetchNews}