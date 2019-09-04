// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var body = document.body;                                                           // store document.body as a variable for easier readability
  var storage = [];                                                                   // empty storage array

  var getElements = function(element) {                                               // set up an inner function to iterate through all the elements within body
    for (var i = 0; i < body.length; i++) {                                           // loop through the parent elements within document.body
      if (element[i].classList !== undefined && element[i].classList.contains(className)) {           // if the element has a class at all AND the element within HAS className parameter
        storage.push(element);                                                        // simply push that className into the storage array
      }
    }

    if (element.hasChildNode) {                                                       // if the element has child nodes,
      getElements(element[i]);                                                        // then we will recurse through that child node by passing it into the function on line 12
    }                                                                                   // that way it will loop through multiple levels of elements
  }

  getElements(body);                                                                  // invoke inner function by passing in the document.body that will be iterated through

  return storage;                                                                     // return completed storage array with all className elements
};