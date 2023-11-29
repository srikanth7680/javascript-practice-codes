//Type conversions and Type coercision
let x = 6
console.log(x,typeof x);//6 number
//If you want to convert the number to string
x = String(6)
console.log(x, typeof x);// 6 string
//If you want to convert the string to number
x = "123"
console.log(x,typeof x);//123 string
//If you want to convert the string to number
x = Number("123")
console.log(x,typeof x);//123 number 



//
let y = Number("123 srikanth")
console.log(y,typeof y);//NaN number
//ParseInt----It is used to convert the string to Number
y = parseInt("123 srikanth")
console.log(y);//123
//Boolean values
z = Boolean(0)
console.log(z);//false