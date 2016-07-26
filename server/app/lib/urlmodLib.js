/**
 * URL manipultion functions
 */
var url = require('url');

/**
 * Convert and correct relative to absolute path
 * @param {string} pageURL - pagination page: http://sub.foo.com/cat/1/
 * @param {string} [inurl] - absolute or relative URL: http://sub.foo.com/advert123.html or ../cat/advert123.html
 * @return string - modified URL
 */
module.exports.toAbsolute = function (pageURL, inurl) {

  var outurl;

  //if url is relative path
  if (inurl !== undefined && inurl.indexOf('http') === -1) {
    outurl = url.resolve(pageURL, inurl);
  } else {
    outurl = inurl;
  }

  return outurl;
};



/**
 * Encode parameter in URI:  /some string with empty spaces čćžšđ/ -> /some-string-with-empty-spaces-čćžšđ/
 * @param {string} q -parameter
 * @return {string} converted parameter
 *
 */
module.exports.encodeParameter = function (q) {
  q = q.replace(/\s/g, '-');
  q = encodeURI(q);
  return q;
};


/**
 * Unencode parameter in URI: /some-string-with-empty-spaces-čćžšđ/ -> /some string with empty spaces čćžšđ/
 * @param {string} q -parameter
 * @return {string} converted parameter
 *
 */
module.exports.unencodeParameter = function (q) {
  var q2 = decodeURI(q);
  var q3 = q2.replace(/\-/g, ' ');
  return q3;
};



/**
 * Convert string into uri format: 'Some String čćžšđ' -> 'some-string-cczsd'
 * @param {string} s -inputed string
 */
module.exports.strToURI = function (s) {
  s = s.toLocaleLowerCase();
  s = s.replace(/[`~!@#$%\^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ' '); //replace special characters
  s = s.replace(/\s/ig, '-'); //replace empty space with -
  s = encodeURI(s);
  s = s.replace(/[\-]{1,}/ig, '-'); //replace --- with -
  return s;
};


/**
 * get browser's IP address
 */
module.exports.getIP = function (req) {
  var ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
  return ip;
};

/**
 * Get hostname from a link: http://www.foo.com/some/file.php -> www.foo.com
 * @param {string} linkURL -link URL: http://www.foo.com/some/file.php
 */
module.exports.getHostname = function (linkURL) {
  var url_obj = url.parse(linkURL);
  return url_obj.hostname;
};