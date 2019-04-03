/*
  Don't run this file
*/

/* 
  Babeljs.io is a transpiler. 
  Traceur is also a transpiler but from Google. 
*/

// Destructuring
//   old
var foo = {
  bar: 1,
  baz: 2
}

//  new
var { bar, baz } = foo;

var tenses = ["first", "you", "he"];
var [ firstPerson, secondPerson ] = tenses;

Promise.all([promise1, promise2]).then(function([results1, results2]) {
  console.log("Some code would go here.");
});

