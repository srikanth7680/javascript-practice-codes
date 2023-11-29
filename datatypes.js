console.log("Hello World!!")

let a = 2 + 2 //int
console.log(a)
let user = "srikanth" //string
console.log(user)

let radius = 5
const pi = 3.14
area = pi * radius * radius
console.log("area of a circle is ",area) // area of circle

let num = 23
if (num % 2 == 0)
{
  console.log("Even");
}
else
{
  console.log("Odd");
}
//odd



// Datatypes
/// Number datatype
let Data = 23
console.log(typeof(Data)); //number
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MAX_VALUE * 10) //Infinity
let n = 5/0
console.log(n) //Infinity
n = -5/0
console.log(n)//-Infinity

let number = 12345678845567882345678890008543n
console.log(typeof number)// BigInt
console.log(number +2n) //12345678845567882345678890008545n




///STRING LITERAL DATATYPE
let firstname = "srikanth"
let lastname = "poola"
fullname = firstname+lastname//srikanthpoola
console.log(fullname)
fullname = firstname+ " "+ lastname
console.log(fullname)//srikanth poola
console.log(typeof fullname) //string
//Escape character
let user1 = "srikanth \"poola\""
console.log(user1)//srikanth "poola"




///BOOLEAN DATATYPES
let Bool = 5>6
console.log(Bool)//false
Bool = 5<6
console.log(Bool)//true
console.log(typeof Bool)//boolean





///NULL AND UNDEFINED
let text = null
console.log(text)//null
console.log(typeof text)//object
let y
console.log(y)//undefined
console.log(typeof y)//undefined



//Nan ("The output is NaN,but the type is "Number")
let num1 = 5
console.log(5/"srikanth")//NaN
console.log(typeof(5/"srikanth"))//number

