// 1.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

// using ternary operator instead of if-else
// function maxOfTwoNumbers(x, y) {
//   return x >= y ? x : y;
// }

console.log(maxOfTwoNumbers(3, 9));



// 2.
const maxOfThree = function(x, y, z) {
  if (x >= y && x >= z) {
    return x;
  } else if (y >= x && y >= z) {
    return y;
  } else {
    return z;
  }
};

console.log(maxOfThree(5, 10, 1));

// 3.
function isCharAVowel(s) {
  s = s.toLowerCase();
  return ('aeiouy'.indexOf(s) > -1);
  // or use ES2015's string.includes
  // return 'aeiouy'.includes(s);
}

console.log(isCharAVowel('b'));

// 4.
const sumArray = function(arr) {
  let sum = 0;
  // the forEach method rocks!
  arr.forEach(function(n) {
    sum += n;
  });
  return sum;
  // later, you will learn this is a good use case for the reduce method
};

console.log(sumArray([5, 10, 1]));

// 5.
function multiplyArray(arr) {
  let product = 1;
  // feel free to use a for loop or forEach if you want to really be cool!
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

console.log(multiplyArray([5, 10, 2]));

// 6.
const numArgs = function(...args) {
  return args.length;
  // or, without using a rest parameter
  // return arguments.length;
};



console.log(numArgs('test', true, 5));

// 7.
function reverseString(s) {
  // strings don't have a reverse method - but arrays do!
  let arr = s.split('');
  // let arr = Array.from(s);  <-- another way to create an array from an array-like object  or iterable
  return arr.reverse().join('');
}

console.log(reverseString('rockstar'));

// 8.
const longestStringInArray = function(arr) {
  let longest = 0;
  // using forEach this time!
  arr.forEach(function(s) {
    if (s.length > longest) longest = s.length;
  });
  return longest;
};

console.log(longestStringInArray(['say', 'hello', 'in', 'the', 'morning']));

// 9.
function stringsLongerThan(arr, len) {
  // now we're talking!
  return arr.filter(function(s) {
    return (s.length > len);
  });
  // don't sweat it - we'll be covering array iterator methods like filter quite a bit in the course
};

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));
