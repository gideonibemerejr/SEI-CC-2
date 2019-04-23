// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  // 2.
  const maxOfThree = function(x, y, z) {
    if (x >= y && x >= z) {
      return x;
    } else if (y >= x && y >= z) {
      return y;
    } else{
      return z;
    }
  }
  console.log(maxOfThree(-13, -4, -27));
  
  
  // 3. 
  function isCharAVowel(character) {
    character = character.toLowerCase();
    return (character === "a" || character === "e" ||character === "i" ||character === "o" ||character === "u") 
  }
  console.log(isCharAVowel("A"));
  
  
  //4. 
  const sumArray = function(arr) {
    let sum = 0;
    arr.forEach(function(number) {
      sum += number;
    });
    return sum;
  }
  
  console.log(sumArray([6,500,5]));
  
  //5. 
  function multiplyArray(arr) {
    let product = 1;
    for (var i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    return product;
  }
  console.log(multiplyArray([5,2,2]));
  
  //6.
  const numArgs = function(...arguments) {
    return arguments.length;
  }
  console.log(numArgs(5,5,5,6,78,3,3));
  
  //7. 
  function reverseString(str) {
    let array = str.split('');
    return array.reverse().join('');
  }
  
  console.log(reverseString('Dont you open up that window'))
  
  
  //8. This one was also confusing
  const longestStringInArray = function(arr) {
    let longest = 0;
        arr.forEach(function(str){
          if (str.length > longest) longest = str.length;
        });
        return longest;
    // function check(arr) {
    //   let falseCheck = arr.every(function(i){ return typeof i === "string" });
    //   if (falseCheck === false) {
    //     console.log("Some of those werent strings man");
    //   } else {
        
    //   }
    // }
    // check(arr);
  }
  console.log(longestStringInArray(["whathehell", "yes", "ebening", "this is the longest easily"]));
  
  //9. This one was kind of confusing
  function stringsLongerThan(arr, length) {
    return arr.filter(function(str){
      return (str.length > length)
    });
  }
  console.log(stringsLongerThan(['what','whatisthis','whateryouding'], 5));
  