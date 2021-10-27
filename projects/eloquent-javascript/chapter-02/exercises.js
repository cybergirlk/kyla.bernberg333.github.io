
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles() {
  // write a loop triangle that makes seven calls to the console to out put
  //#
  //##
  //###
  // till 7 #'s
  for (let triangle = '#'; triangle.length <= 7; triangle += '#'){
  console.log(triangle);
  }

};
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  /**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
for (let i = 1; i <= 100; i++){
  if (i % 15 === 0){
    console.log('FizzBuzz')
  }
  else if (i % 3 === 0){
    console.log('Fizz')
  }
  else if (i % 5 === 0){
    console.log('Buzz')
  }
  console.log(i)
}


  
};

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard() {


let size = 8;// sets limit for the iteration used in our loop
let board = "";//sets a blank placeholder to be filled w our if statements
for (let x = 0; x < size; x++){// z represents the vertical assents the rows
//now i will create a for loop
// the for loop of j must loop thru its entire cycle 
//before loop x can run its next course
  for (let j = 0; j < size; j++) {// j represents the horrizontal assets the collumns
    if ((x + j) % 2 == 0){// when we add x plus j every 2nd number divisable by 2
      //every second charachter will execute the " " charachter
      // and every new line will alternate between and even and odd number
      board += " ";// adjust our variable and add space inbetween
    } else {
      board +="#";// for every other number not divisable by two we will use the # creating
      //the alternating paater of the board

    }
  }
  board += "/n";// create a new line "/n" 
  // this line is associated with the x loop
  //therefore it makes sure the loop of x has completed to its entirety before breaking for a new line
  
}
console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
