//sets in javascript
// syntax for set
let num = new Set([1,2,3,4,5,5]) /// syntax for set
num.add(8)   // add() is used to add the values into the set
console.log(num) //{ 1, 2, 3, 4, 5, 8 }

 //using for..of loop to iterate the values
// for (const n of num) {
//         console.log(n);
// }
//output
// 1
// 2
// 3
// 4
// 5
// 6

//By using forEach loop
num.forEach((n)=> {
  console.log(n);
})
//output
// 1
// 2
// 3
// 4
// 5
// 6

//has property
let a = new Set([1,2,3,4,5])
console.log(a.has(2)); //true