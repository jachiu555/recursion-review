// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, doc) {
  // your code here

  var returnArray = [];
  if (!doc) {
    var doc = [...document.body];
  }

  for (var x = 0; x < doc.length; x++) {
    console.log(doc[x]);


  }


  // if (className === )
};
