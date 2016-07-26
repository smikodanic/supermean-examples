/**
 * Pagination library
 */

/**
 * Creating pagination object
 * @param Object req [NodeJS request object which carry POST variables from FORM]
 * @param Number countNum - total number of MongoDB collections per query
 * @return pagination object
 */
module.exports.paginator = function (req, countNum, pagesPreURI, perPage, spanNum) {

  /* Current page number can be defined by 2 ways:
   * 1. req.params.currentPage  for example: /ads/business/3
   * 2. req.query.currentPage  for example: /ads/?category=business&currentPage=3
   */
  var currentPage;
  if (req.params.currentPage !== undefined) { // /ads/business/3
    currentPage = parseInt(req.params.currentPage, 10);

  } else if (req.query.currentPage !== undefined) { ///ads/?category=business&currentPage=3
    currentPage = parseInt(req.query.currentPage, 10);

  } else {
    currentPage = 1;
  }

  //define total number of pages
  var pagesTotal = Math.floor(countNum / perPage) + 1; //npr. 20/2 = 10


  //define pagination numbers that will be shown from start to end
  var istart;
  var iend;
  if (pagesTotal >= spanNum) {
    if (currentPage >= 1 && currentPage < spanNum) {
      istart = 1;
      iend = spanNum;
    } else if (currentPage >= spanNum && currentPage <= pagesTotal - spanNum / 2) {
      istart = currentPage - spanNum / 2;
      iend = currentPage + spanNum / 2;
    } else {
      istart = pagesTotal - spanNum + 1;
      iend = pagesTotal;
    }
  } else {
    istart = 1;
    iend = pagesTotal;
  }

  //put pagination numbers into array
  var i;
  var pages_arr = [];
  for (i = istart; i <= iend; i++) {
    pages_arr.push(i);
  }

  //final pagination array
  var pagination_obj = {
    pagesPreURI: pagesPreURI,
    currentPage: currentPage,
    countNum: countNum, //total number of results (MongoDB documents)
    perPage: perPage, //MongoDB documents per page
    pagesTotal: pagesTotal, // total number of pagination pages
    skipNum: (currentPage - 1) * perPage,
    pages_arr: pages_arr
  };

  // console.log(istart + ' - ' + iend);
  // console.log(pagination_obj);

  /*pagination object end*/

  return pagination_obj;

};


