// HERE IS THE LINK TO THE repl: https://repl.it/@gideonjr/JS-Function-Lab

// 1.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return ("The number " +x+ " is larger than the number " +y);
  } else {
    return ("The number " +y+ " is larger than the number " +x);
  }
  
  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

// 2.
const maxOfThree = function(x, y, z) {
  if (x >= y && x >= z) {
    return (x+ " is the largest of these three numbers");
  } else if (y >= x && y >= z) {
    return (y+ " is the largest of these three numbers");
  } else{
    return (z+ " is the largest of these three numbers");
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
  return ("The sum of these numbers is " +sum);
}

console.log(sumArray([6,500,5]));

//5. 
function multiplyArray(arr) {
  let product = 1;
  for (var i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return ("The product of these numbers is " +product);
}
console.log(multiplyArray([5,2,2]));

//6.
const numArgs = function(...arguments) {
  return ("There are "+arguments.length+" numbers in this list");
}
console.log(numArgs(5,5,5,6,78,3,3));

//7. 
function reverseString(str) {
  let array = str.split('');
  return array.reverse().join('');
}

console.log(reverseString('Dont you open up that window'))


//8.
const longestStringInArray = function(arr) {
  let longest = 0;
      arr.forEach(function(element){
        if (element.length > longest) longest = element.length;
      });
      return ("The longest string in this array has " +longest+ " characters");
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

//9.
function stringsLongerThan(arr, length) {
  return arr.filter(function(str){
    return (str.length > length);
  });
}
console.log(stringsLongerThan(['what','whatisthis','whateryouding'], 5));
