'use strict';

var request = require('superagent');
var moment = require('moment');
var url = 'https://api.github.com/orgs/backdrop-contrib/repos';
var lastWeek = moment().subtract(7, 'days').format('YYYY-MM-DD');
var modules = [];
// 2015-01-27T07:19:03Z
console.log(lastWeek);

request.get(url, function(err, res) {
  if (err) throw err;

  for (var i = res.body.length - 1; i >= 0; i--) {
    var created = moment(res.body[i].created_at).format('YYYY-MM-DD');
    if (created >= lastWeek) {
      // modules.push({ res.body[i].name, res.body[i].html_url });
      console.log('*', created, '[' + res.body[i].name + '](' + res.body[i].html_url + ')');
    }
  };

});