function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    for (var i = 1; i <= 100; i++){
    if (i % 15 === 0){
        console.log("Fizzbuzz")
    }
    else if (i % 3 === 0){
        console.log('Fizz')
    } 
    else if (i % 5 === 0){
        console.log('Buzz')
    } else {
        console.log(i)
    }
}
}
    
function greeter(hour) {
    // YOUR CODE BELOW HERE //
    if (hour >= 0 && hour <= 11){
        console.log('Good Morning!');
    }
    else if (hour >= 12 && hour <= 16){
       console.log('Good Afternoon!');
    }
    else if (hour >= 17 && hour <= 21){
        console.log('Good Evening!');
    }
  else if (hour >= 22 && hour <=24){
        console.log("Good Night!");
    }



// YOUR CODE ABOVE HERE //
}function printArrayValues(array) {
    // YOUR CODE BELOW HERE //
    
    for(let i = 0; i => array.length; i++){
      console.log(array[i]);
    }
    
    
    
    // YOUR CODE ABOVE HERE //
  }
  function printArrayValuesInReverse(array) {
    // YOUR CODE BELOW HERE //
    
    
    for(let i = array.length-1; i => 0; i--){
      console.log(array[i]);
    }
    
    
    // YOUR CODE ABOVE HERE //
  }
  function getObjectKeys(object) {
    // YOUR CODE BELOW HERE //
    
    
    console.log(object.keys(object))
    
    // YOUR CODE ABOVE HERE //
  }

  function printObjectKeys(object) {
    // YOUR CODE BELOW HERE //
    
    
    for(let i = 0; i < object.length; i++)
    console.log(object.keys(object));
    
    // YOUR CODE ABOVE HERE //
  }
  function getObjectValues(object) {
    // YOUR CODE BELOW HERE //
    
    var valueArr = [];
    for (var key in object){
  return valueArray.push(object[key]);
    }
    
    return valueArray
    
    
    // YOUR CODE ABOVE HERE //
  }
  function printObjectValues(object) {
    // YOUR CODE BELOW HERE //
    
    
    var valueArr = [];
    for (var key in obj){
      valueArr.push(object[key]);
    }
    for (var i = 0; i <= object.length; i++){
  console.log(valueArr[i]);
    }
    
    
    
    // YOUR CODE ABOVE HERE //
  }
  function getObjectLength(object) {
    // YOUR CODE BELOW HERE //
    
    console.log(object.keys(object));
    
    
    // YOUR CODE ABOVE HERE //
  }
  

  function printObjectValuesInReverse(object) {
    // YOUR CODE BELOW HERE //
    
    
    var valueArr = [];
    for (var key in obj){
      valueArr.push(object[key]);
    }
    for (var i = valueArr.length - 1; i >= 0; i--){
  console.log(valueArr[i]);
    }
    
    // YOUR CODE ABOVE HERE //
  }