//Map in javascript is ES6
//Map is a collection of key value pairs like object but object has different properties 
// it was introduced in javascript ES6
let map = new Map();   //syntax for creating the map
map.set('srikanth','javascript') //set() method is used to add the values to the map
map.set('ramu','ML')
console.log(map); //Map(2) { 'srikanth' => 'javascript', 'ramu' => 'ML' }
console.log(map.keys());//[Map Iterator] { 'srikanth', 'ramu' }
console.log(map.values());//[Map Iterator] { 'javascript', 'ML' }
console.log(map.has('srikanth'));//true
console.log(map.get('srikanth'));//javascript
///for of loop
for (const [k,v] of map) {
      console.log(k, ":" ,v);
}
//output
// srikanth : javascript
// ramu : ML   

//using forEach loop
map.forEach((v,k) => {
  console.log(k,":",v);
})
