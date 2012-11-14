var jsdom = require('jsdom');

jsdom.env("http://yahoo.com", [
  "http://code.jquery.com/jquery.js"
], function (err, window) {
  var $ = window.$;
  $(".accordion-stories a").each(function () {
    console.log($(this).text());
  });
});
