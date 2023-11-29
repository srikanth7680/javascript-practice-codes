//objects in javascript
let alien = { }
console.log(alien);//{}  empty object
console.log(typeof(alien));//object
//create a object
let laptop = {
  name:'HP',
  RAM:'8gb',
  ROM:'1TB'
}
console.log(laptop); //{ name: 'HP', RAM: '8gb', ROM: '1TB' }
console.log(laptop.name);//HP
console.log(laptop.RAM);//8gb
           //or
console.log(laptop['ROM']);//1TB

///for in loop 
for (const key in laptop) {
  if (laptop.hasOwnProperty.call(laptop, key)) {
    const element = laptop[key];
    console.log(element);
  }
}
//output 
// HP
// 8gb
// 1TB