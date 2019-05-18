<img src="https://i.imgur.com/DEsPVNw.png">

# Intro to JavaScript & Data Types

## Learning Objectives

| Students will be able to: |
| :--- |
| Identify JavaScript's Data Types |
| Define Variables Using Proper Naming Conventions |

## Roadmap
1. Intro to JavaScript
2. Explore JavaScript's Data Types
3. Variables
4. Further Study

## 1. Intro to JavaScript

> _Atwood's Law:_<br>
> "Any application that can be written in JavaScript will eventually be written in JavaScript."<br>
> _\- Jeff Atwood, co-founder of Stack Overflow_

*Languages on GitHub - Percentage of Monthly Active Users:*
![](https://i.imgur.com/HJapAIF.png)

**? - Why do you believe JavaScript is so popular?**

#### JavaScript's Role

The primary responsibility of JavaScript is to provide behavior to our web applications via client-side script that runs in the browser.

![](https://i.imgur.com/FwvjQVO.jpg)

> The popularity of a technology known as _Node.js_ has made JavaScript popular outside the browser as well.  We'll learn about _Node.js_ in week 7.

#### A Few Facts About JavaScript:

- Created in 10 days in 1995 by Brendan Eich.
- Not to be confused with Java (although both have syntaxes based upon the "C" programming language).
- JavaScript is an implementation of ECMAScript, a standard maintained by the European Computer Manufacturers Association).
- The version of ECMAScript currently implemented in most modern browsers is ES2015 (formerly named ES6). [This website](http://kangax.github.io/compat-table/es6/) reports the implementation status in all major browsers. ES2015 represents a major update, adding lots of new features, from its predecessor, ES5.  During SEI, we will start with the basics but will gradually learn ES2015 and beyond.
- Contrary to what you may have heard or read, JavaScript is an object oriented programming (OOP) language. We use "objects" heavily in JS and these objects have properties and methods like in other OOP languages.  However, JS is not considered to be a "classical" OOP language thanks to its use of [prototypal  inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).  Yes, thanks to ES2015, JS now has _classes_ that are used to create objects, but the implementation of _classes_ in JS is just "syntactic sugar" on its prototypal paradigm. We'll learn more about _classes_ next week.

> Don't let all of these buzzwords confuse or scare you. By the end of the course, you too will be dropping this vocab!

## 2. Explore JavaScript's Data Types

Okay, now let's talk about data types...

JavaScript is an _untyped_ language. This means that we do not explicitly specify the _type_ of data a variable can hold.

In _strongly typed_ languages such as Java, data types are explicitly specified for a variable - and an error will occur if a different data type is assigned.

> _Strongly typed_ languages require a little more effort to code in, however, many developers agree that it's worth it because it makes code less error prone. There is a newer language called _TypeScript_ you might hear about - this language is a superset of JS and adds strong typing to JS.

Although we don't specify data types in JavaScript, every single piece of data **still has a type**! For example, when we assign some text to a variable like this:

```js
let movie = "Contact";
```
the variable `movie` **would have a data type of ________?**

JavaScript has six main data types (ES2015 brings a new _symbol_ data type - that we don't need to worry about).

![](https://i.imgur.com/E4JR95G.png)

Let's examine each of these...

#### Setup

We are going to use Chrome's DevTools in this lesson to inspect and manipulate data.

Open Chrome and press `command+option+j` to open the _console_ (one feature of Chrome's DevTools). The _console_ allows us to enter JS expressions and statements.

#### 2. Explore JavaScript's Data Types

##### string

A **string** represents textual data with zero or more characters wrapped by single or double quotation marks such as `"John"` or `'Jane'`. A pair of quotes with nothing between them is still a **string** - an _empty string_.

```
> 'Hello World'
< "Hello World"
> typeof "I'm a string"
< "string"
```

Note that the `typeof` operator itself always returns a string describing the data type.

> ES2015 Note: In addition to using single and double quotes to delimit a string, ES2015 adds a third way by using the back-tick character to create what's called a _template literal_.  We'll learn more about _template literals_ later in the course.

##### number

A **number** represents a numeric value.

Unlike many other programming languages, there is no distinction between integer (`15`, `3`, etc.) and floating-point/decimal types (`17.24`, `3.1416`, etc.).

Internally, JS represents all numbers as floating-point values.

```
> 15
< 15
> typeof 15
< "number"
> typeof 12.34
< "number"
> typeof '12.34'  // what will this return as the type?  
```

##### boolean

Whereas strings and numbers can have a virtually unlimited number of different values, the **boolean** data type only has two possible values: `true` and `false`.

#### EXERCISE: Data Type Examples

**Strings**, **numbers** and **booleans** are the most common data types used to "model" real-world data in applications.

For example, in a Social Gaming app, we would represent a Gamer's Handle using a **string**.

Before moving on to review the other data types, let's pair up with a partner and identify a couple of examples for each of the three common data types that would be used to represent information in that gaming app:

<table>
	<thead>
		<tr><th>Application</th><th>Data Type</th><th>Example Data/Information</th></tr>
	</thead>
	<tbody>
		<tr><td rowspan="3">Social Gaming App</td><td>String</td><td>Gamer's Handle, ?</td></tr>
		<tr><td>Number</td><td>?, ?</td></tr>
		<tr><td>Boolean</td><td>?, ?</td></tr>
	</tbody>
</table>

In a few minutes, I'll ask some of you to share what you've come up with...
<br>

<hr>

Now let's continue looking at the other data types...

##### null

The _null_ data type has only one value: __null__.

We often assign the value _null_ to a variable to represent the fact that it has no "real" value :)

```
> typeof null
< "object"  // Fail! Remember, JS was written in 10 days by one dude!
```

##### undefined

A variable that has not been assigned a value is of type _undefined_.  For example:

```js
let cohort;  // cohort currently holds undefined
```

Also, a function by default returns _undefined_ if a value was not explicitly returned using the `return` keyword or if the function was called as a _constructor function_ (a function prefaced with the `new` keyword when invoked).

Lastly, you will see _undefined_ a lot in the console when it evaluates a statement that does not return a value.

```
> typeof undefined
< "undefined"
> console.log('hello')
  "hello"
< undefined
```

##### object

Most programming languages have two major classifications of data types:

- **Primitive/Value** data types
- **Complex/Reference** data types

Variables that hold a _primitive_ data type can hold only **one value** at a time. This is why _primitive_ data types are also referred to as _value_ datatypes.

The five data types that we've looked at thus far are classified as _primitive_ data types.

That brings us to _complex_ data types. _Complex_ data types can be thought of as containers capable of holding several pieces of data. They are also referred to as _reference_ data types (more on this later in SEI).

In JavaScript, we only have one _complex_/_reference_ data type - **object**.

Typically, when we discuss _objects_ in JS, we thinking about plain ol' _objects_ that have a collection of zero or more properties (key/value pairs) like this:

- **Object**<br>`{name: 'Fred Flintstone'}`

However, there are several special versions of the JS object.  Here they are:

- **Array**<br>`[1, 2, 3]`
- **Date**<br>`new Date()`
- **RegExp**<br>`/.*/`
- **Error**<br>`new Error('An error message')`
- **Function**<br>`function() {}`

All of the above are objects!  They are collections of key/value pairs.

Note that it is okay to refer to these as their own data type, for example, if asked what type of data `['cat', 'dog', 'fish']` is, it would be acceptable to answer "an array". However, _technically_, there are only six data types (excluding symbols), and _array_ is not one of them :)

We will learn more about _objects_ in a later lesson.

For now, let's just verify what `typeof` returns:

```
> typeof {course: 'SEI', cohort: 2}
< "object"
> typeof []
< "object"
> typeof /./
< "object"
```

Although _functions_ are also considered objects (_callable objects_ to be exact), the `typeof` operator returns a more helpful data type:

```
> typeof function(){}
< "function"
```

Yay, we've covered all six data types!

**? - Do all variables have a data type?**

## 3. Variables

_Variables_ are ubiquitous in computer programming.

Their purpose is to hold a **single** value or thing.

#### `var`, `let` or `const`?

Variables are declared using the `var`, `let` or `const` keywords.

Until ES2015 came along, `var` was our only option and has been for the past 25+ years - so obviously, it does the trick!

Why was `let` and `const` added to the language then?

##### scope

The difference between `var` and `let/const` is what we call _scope_. We're going to talk more about scope tomorrow, but basically, scope revolves around the accessibility of variables & functions at a given point in the code.

When a variable or function is accessible, we say that it's "in scope". Conversely, when a variable or function cannot be accessed, it's considered "out of scope".

`var` has _function scope_ and `let/const` have more limited _block scope_, which in computer programming, is considered a best practice because it helps avoid the mistake of accidentally changing a variable's value.

##### `let` vs. `const`

The difference between `let` and `const` is that a `const` variable cannot be re-assigned to - you can assign data to it once, and that's it:

```js
let x = 25;
x = 100;  // no problem

const z = 25;
z = 100;  // Uncaught TypeError: Assignment to constant variable
```

As discussed in the previous section, an object (or an object sub-type like array, function, etc.) is what we call a reference type.

Objects are reference types because, if we assign an object to a variable, that variable does not actually hold the object, rather it holds a "reference" that points to the object in memory.  As such, when you assign an object to a `const`, you can make changes to the object itself, you just can't re-assign to the `const`:

```js
const person = {name: 'Fred'};
person.age = 25;  // no error
person = {name: 'Barney'}  // Uncaught TypeError: Assignment to constant variable
```

#### Identifiers

We name variables, as well as most functions, using _identifiers_:

```js
let name;  // value of name is now undefined
```

**? - What is the identifier of the variable above?**

We can also assign a value to a variable at the time we declare it by using the `=` (assignment) operator:

```js
let name = "Fred Flintstone";  // two birds with one stone!
```

and change it's value later...

```js
name = "Barney";  // note that we only declare a variable once
```

Multiple variables can be defined in a single statement, separated by commas:

```js
let name = 'Wilma',
    age,
    town = 'Bedrock';

// above is equivalent to
let name = 'Wilma';
let age;
let town = 'Bedrock';
```

**? - What does the variable `age` equal?**

##### Naming Variables

In JavaScript, when naming variables, the convention is to name the identifiers using lowerCamelCase, e.g.,  `myLittleHouse`.

Identifiers in JS:

- Are case-sensitive!
- Cannot begin with a number
- Can contain letters, digits, underscores, and dollar signs

**? Is `car-3` a valid variable identifier?**

**Any questions regarding variables?**

## 4. Further Study

### Type Conversion

JavaScript is very relaxed when it comes to data types. Contrary to non-dynamic languages, a variable can change its type.

```js
let m = 15;  // I'm a number
m = 'hey';   // Now I'm a string!
```

#### Beware of Implicit Conversion

JavaScript is friendly and tries to help us whenever it can. However, we all know that sometimes it's better to be left alone.

__Try adding a string to a number.  What did JS do?__

__Now try comparing a number and a string containing the same digits using the equality (`==`) comparison operator__

```js
13 == "13"  // returns true!
```

This is why, unless there's a reason not to do so, we use the _strict equality operator_ (`===`) as it will not perform type conversion. 

#### Explicit Type Conversion

We can easily convert a number to a string using the `toString()` and `toFixed()` methods:

```js
let n = 123.456;
let s1 = n.toString();  // "123.456"
let s2 = n.toFixed(2);  // "123.46"
```

There are a couple of handy methods used to convert strings to numbers: `parseInt()` and `parseFloat()`

```js
let s = "1234.567";
let n1 = parseInt(s);  // 1234
let n2 = parseFloat(s);  // 1234.456
```
Remember however, that the data type for both flavors, integer and float (short for floating-point), is _number_.

## References

[MDN JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

