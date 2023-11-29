//Recursion in javascript
///Function calling itself is called recursion
let num = 1
function show(){
  console.log("hello",num);
  num++
  show();
}
//factorial using recursion
function fact(n) {
  if(n===0){
    return 1;
  }
  else{
  return n * fact(n-1)
  }
}
let r = 5
result = fact(r)
console.log(result);