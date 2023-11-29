/// Array methods and for..each in javascript
let num = [1,2,3,4,5]
num.forEach((n,i,num) => {    ///forEach() function
  console.log(n,i,num);
});
// It doesn't produce a new array

//forEacch() Example
let n = [12,13,14,15,16,17]
n.forEach((number,index,n)=>{
  console.log(number + 10);
})

/// So,It is better to use foreach and for...of to iterate the arrays

// If you try to iterate the array using the for..in it will results the index values
a = [1,2,3,6,5]
for (const n in a) {
  console.log(n);
}
// 0
// 1
// 2
// 3
// 4

//In forEach method It doesn't produce a  new array with transformed elements.
// If you want to create the new array with the result of transformation,you might consider using method like 'MAP'.