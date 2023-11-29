///Arrray methods filter,map,reduce
//filter() method ---- It is ised to filter the values in the array
let num = [1,2,3,4,5,6,7,8]
num.filter((n)=> n%2===0)
.map(n => n *2)
.forEach((n)=> {
  console.log(n);
})
///2
// 4
// 6
// 8
//map() method --- It iterates each element in the array ,applies the callback function it and then collect the return values in the new array
let a = [20,30,40,50]
a.map((n) => n*2) 
  .forEach((n)=>{
    console.log(n);
  })

//reduce() method ---It is used to sum the values in the array it gives single value 
let b = [2,4,8,10,12]
let result = b.reduce((a,c)=>a + c)
console.log(result);//36
//It reduces the large array into single value that can be number,object,string..etc