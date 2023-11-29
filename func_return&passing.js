//Function return and passing
// return the value
function start()
{
  return 'Hello world' ///returning a statement
}
let x = start(); //storing the return statement in the x variable
console.log(x); ///Hello world

// passing the value to the function name
function name(user,p,q)
{
  return `Hello ${user}`
}
let user = 'srikanth'

const y = name(user);
console.log(y);//Hello srikanth

//addition of two numbers
function add(a,b)
{
  c = a +b
  console.log(c);
}
add(2,4);//6

