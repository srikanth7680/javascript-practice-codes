//Conditional statements
// If we have two conditions 
let num1 = 8
let num2 = 7
if(num1 > num2){
  console.log("num1 is greater");
}
else{
  console.log("num2 is greater");
  console.log("hii");
}
///highest among three numbers
let x = 3,y = 2,z = 9;
if(x >y && x>z)                 /// It will check num1 is greatest
{
  console.log("x is greatest",x);
}
else if(y > x && y > z)        /// It will check num2 is greatest
{
  console.log("y is greatest",y);
}
else                          /// It will check num3 is greatest
{
  console.log("z is greatest",z);
}

//Even or odd using if else statements
let number = 9
if(number%2 == 0) {
  console.log("Even number");
}
else{
  console.log("Odd number");
}