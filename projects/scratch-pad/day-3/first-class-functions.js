// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
//    return fuction (counter) {
//        if (counter > base){
//            return true
//        } else {
//            return false
//        }
//    }
    return function(counter){
        if (counter > base){
            return true
        } 
        return false
    }
}
    // YOUR CODE ABOVE HERE //

// /** 
//  * Given an input base to test against, which could be a String or Number, 
//  * return a Function that tests whether a given value is less than the 
//  * base.
//  */
function createLessThanFilter(base) {
//     // YOUR CODE BELOW HERE //
return function (value) {
    if (value < base){
        return true
    } 
    return false
}
};
    
    
    
//     // YOUR CODE ABOVE HERE //
// }

// /** 
//  * Given a startsWith character, which will be a single character, return a 
//  * Function that tests whether a given String starts with the startsWith 
//  * character.
//  */
function createStartsWithFilter(startsWith) {
    return function (string) {
       if  (string[0].toUpperCase() === startsWith.toUpperCase()){
           return true
       }
        return false
    }
    
    
    
    
//     // YOUR CODE ABOVE HERE //
};

// /** 
//  * Given a endsWith character, which will be a single character, return a 
//  * Function that tests whether a given String ends with the endsWith 
//  * character.
//  */
function createEndsWithFilter(endsWith) {
//     // YOUR CODE BELOW HERE //
    
return function (string) {
    if  (string[string.length-1].toUpperCase() === endsWith.toUpperCase()){
        return true
    }
     return false
 }
 
 
    
    
//     // YOUR CODE ABOVE HERE //
}

// /** 
//  * Given an Array of Strings and a Function designed to modify a String, 
//  * return the Array of the Strings, modiied.
//  * 
//  * TIP: You need to loop over the Strings, right? We need to pass each String to 
//  * the modify Function, but we need to collect the results into some collection.
//  */
function modifyStrings(strings, modify) {
//     // YOUR CODE BELOW HERE //
let arrStringsModified = [];
for (let i = 0; i < strings.length; i++){
arrStringsModified.push(modify(strings[i]))


}
return arrStringsModified
}


//

    
    
    
    
//     // YOUR CODE ABOVE HERE //


// /** 
//  * Given an Array of Strings and a Function designed to test the String in some 
//  * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
//  * 
//  * Imagine you had a list of names, and you wanted to test they all 
//  * begin with "C", or they are all exclaimations that end with "!".
//  * 
//  * TIP: You need to loop over the Strings, right? And pass them to the test?
//  */
function allStringsPass(strings, test) {
    // let arrStringsTest= []
    // for (var i = 0; i < strings.length; i++){
    //    if((strings[i].toUpperCase === strings.toUpperCase)){
    //     return arrStringsTest.push(test(strings[i])){
            
        
    //    } 
    //    return false
    // }

// let passTest = [];
// for (let i = 0; i < strings.length; i++){
//     if()
// passTest.push(modify(strings[i]))


// }
// return arrStringsModified
}
// }


        // if (condition1) {
        //     //  block of code to be executed if condition1 is true
        //   } else if (condition2) {
        //     //  block of code to be executed if the condition1 is false and condition2 is true
        //   } else {
        //     //  block of code to be executed if the condition1 is false and condition2 is false
        //   }
          
        // if (test(strings[i]) === true){
        //     return true
        // }
        //  else {
        //         (falseCount += 1)
        //     }
        //     if (falseCount > 0){
        //         return true;
        //     } else {
        //         return true;
        //     }
        // }
    
    
    
    // YOUR CODE ABOVE HERE //


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
