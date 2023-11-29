//Arrays in javascript
///syntax for arrays
/// CREATING A ARRAY
// let values = new Array()
//        //or
// let values = []  
let values = []
console.log(values); ///[]
let value1 = [3,4,5]
console.log(value1);//[3,4,5]
console.log(value1.length);//3
//push It pushes the values into the array
let x = []
x.push(4,6)
console.log(x);//[4,6]
x.pop()
console.log(x);//[4] It removes the last element in the array
///Fetching the values in the array
let y = [5,6,7,8]
console.log(y[4]);//undefinrd  If you try to fetch the out of the index it will give "undefined"
console.log(y[1]);//6

//unshift()--- used to add beginning of the array
//shift()--- used to remove the first element in the array

//Different types of data in array
//strings
let a = ['srikanth','ramu','rakhi']
a[3] = 'meher' 
console.log(a); //[ 'srikanth', 'ramu', 'rakhi', 'meher' ]
//combinations in array
let b = ['srikanth','21',{tech:'JS'},function(){ console.log("Hello World");}]
console.log(b); //[ 'srikanth', '21', { tech: 'JS' }, [Function (anonymous)] ]
b[3]() ///Helloworld
c = b[2]
console.log(c);