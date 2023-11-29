//Array methods in javascript
let data = [1,2,3,4,5,6,7]
 //push--- It pushes the element in the end of the array
console.log(data.push(8));//pop
console.log(data);
///pop--- It removes the last element in the array
let x = [2,3,4,56,7]
console.log(x.pop());
console.log(x);
//shift--- remove first element in the array
let y = [2,3,45,6,7]
console.log(y.shift());
console.log(y);
//unshift --- It adds a element in the first
let z = [2,3,4,5,6,7]
console.log(z.unshift(1));
console.log(z);
///splice ---splice()-It takes 2 parameters index value and no. of values you want to remove 
let i = [2,3,4,5,6,7]
console.log(i.splice(3,2,12,23));
console.log(i);
