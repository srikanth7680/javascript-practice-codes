//Relational Operators
console.log(6 > 7)//false
console.log(6 < 7)//true
console.log(7 > 6)//true
console.log(6 > 6)//false
console.log(6 <= 6)//true
console.log(6 >=7)//false
//compare number to number 
 x = 3
 y = 4
 z = x > y
 console.log(z);//false
 z = x<y
 console.log(z);//true
 //compare string to string
x = "Pen"
y = "book"
z = x > y
console.log(z);//false
x = "pen"
y = "Pencil"
z = x>y
console.log(z);//true
z = x<y
console.log(z);//false
//compare string to number
 x = "2"
 y = 2
data = x>y
console.log(data);//false (Because it converts the string to number so it is true)
data = x == y
console.log(data)//true (It is not a correct answer Because string 2 is not eual to number 2)
data = x === y
console.log(data);//false (It is a correct way of approach to compare the string and number)
x = 'a'
y = 2
z = x>y
console.log(z);//false

//
let i = '' // other empty string
let j = false  //0
 k = i == j
console.log(k);//true (Here it gives true because of using a == )
k = i === j
console.log(k);//false

//Difference between '==' and '==='
//'==' is only used for the checking the data not the type
//== It compare the values after performing the type coercion
//'===' is check the data and its type as well
//=== avoid the type coercion so it gives the exact result
