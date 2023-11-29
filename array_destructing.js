/// Array desturcting in javascript
let num = [1,2,3,4,5]
console.log(num);
let [a,b,,d,e] = num
console.log(d);//4
//swapping two values using arrays destructuring
let i = 2;
let j = 4;
[i,j] = [j,i]
console.log(i,j)  //4,2
//string functions in array javascript /// If we put split() It will become array
let words = "my name is srikanth I am a programmer".split(" ")
console.log(words);//[ 'my', 'name', 'is', 'srikanth', 'I', 'am', 'a', 'programmer' ]

let [f,g,h,, ...m] = words
console.log(m);//[ 'srikanth', 'I', 'am', 'a', 'programmer' ]
