/**
 * String and text manipultion functions
 */

/**
 * Trim empty spaces from left and right and remove tab spaces inside text
 * @param string str - string to be modified
 * @return string - modified string is returned
 */
module.exports.strongtrim = function (str) {

  if (str !== undefined) {

    str = str.trim();
    str = str.replace(/\t\t+/g, ' ');
    str = str.replace(/\s\s+/g, ' ');
    str = str.replace(/\n\n+/g, '\n');
    str = str.replace(/\r\r+/g, '\r');

    str = str.replace(/\. /g, '\.\r'); //new sentence in new line

  } else {
    str = null;
  }

  return str;
};


/**
 * Clear text from unwanted characters
 * @param string str - string to be modified
 * @return string - modified string is returned
 */
module.exports.beautifyText = function (str) {

  if (str !== undefined) {

    str = str.replace(/\_/g, ' ');
    str = str.replace(/\:/g, '');
    str = str.replace(/\./g, '');

  } else {

    str = null;
  }

  return str;
};


