// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }



  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //


  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }


  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //


  return Object.keys(object);

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for (let key in object) {
    console.log(key);
  }

  // for(let i = 0; i <= object.length; i++){
  // console.log(Object.keys(object)[i]);
  // }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // var valueArr = Object.values(object);
  // for (let key of object.keys){
  //   return valueArr;
  // }
  return Object.values(object);
  //   var valueArr = [];
  //   for (var key in object){
  // return valueArr.push(object[key]);
  //   }

  //   return valueArr


  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //

  // var valueArr = [];
  // for (var key of object){
  // return valueArr.push(object[key]);
  //     var valueArr = [];
  //   for (var key in object){
  // return valueArr.push(object[key]);
  //   }

 
  var valueArr = [];
  for (var key in object) {
    valueArr.push(object[key]);
  }
  for (var i = 0; i <= valueArr.length; i++) {
    console.log(valueArr[i]);
  }

return valueArr;
  // var valueArr = [];
  // for (var key in object){
  //   return object[key];
}



// YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
return Object.keys(object).length;
}

  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //


  var valueArr = [];
  for (var key in object) {
    valueArr.push(object[key]);
  }
  for (var i = valueArr.length - 1; i >= 0; i--) {
    console.log(valueArr[i]);
  }

  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  // here, export any references you need for tests //
  module.exports.printArrayValues = printArrayValues;
  module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
  module.exports.printObjectValues = printObjectValues;
  module.exports.getObjectValues = getObjectValues;
  module.exports.getObjectKeys = getObjectKeys;
  module.exports.printObjectKeys = printObjectKeys;
  module.exports.getObjectLength = getObjectLength;
  module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
