////for of loop with an array in javascript
/// using forof loop---- If you want to fetch the key of the property and with that key you can fetch the values

//In JavaScript, both for...in and for...of loops are used for iterating over elements in an iterable or enumerable object, 
//but they serve different purposes and have different 

//for..of loop

//Used for iterating over the values of iterable objects, such as arrays, strings, maps, sets, etc.
// Enumerates the values directly and does not consider the object's prototype chain.
// It's more suitable for working with collections and sequences of data.
let num = []
num[0] = 1
num[9] = 10
for (const n of num) {
  console.log(n);
}
// using forin loop ---- it will fetch the key of the propeerty and with that key you can fetch the values

//Used for iterating over the properties of an object, including its prototype chain.
//Enumerates over the keys (property names) of an object.
//Typically used with objects and is not suitable for iterating over arrays or other iterable data structures.
for (const key in num) {
  console.log(key);
  }///0  9


  //conclusion

//In summary, for...in is used to loop through the properties of an object, while for...of is used to iterate over the values of iterable objects. 
//The choice between them depends on the type of data structure you are working with and your specific use case.