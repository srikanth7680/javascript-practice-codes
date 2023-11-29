//complex Object --- object inside the other object is called complex object
let alien = {
  name: 'srikanth',
  tech: 'python',
  laptop : {      /// complex object
    cpu:'i7',
    ram:8,
    rom:'1TB',
    brand:'Macbook',
  }
}
console.log(alien);//{
//   name: 'srikanth',
//   tech: 'python',
//   laptop: { cpu: 'i7', ram: 8, rom: '1TB', brand: 'Macbook' }
// }
console.log(alien.name);//srikanth
console.log(alien.laptop);//{ cpu: 'i7', ram: 8, rom: '1TB', brand: 'Macbook' }
console.log(alien.laptop.ram);//8
console.log(alien.laptop.brand.length);//7 Length of the brand is 7
console.log(alien.laptop.length) //undefined

console.log(alien.laptop.brand?.length)/// it prints undefined if it is brand1 in laptop
///deleting a object and its properties by using delete keyword

delete alien.tech
console.log(alien);//{
//   name: 'srikanth',
//   laptop: { cpu: 'i7', ram: 8, rom: '1TB', brand: 'Macbook' }
// }
console.log(alien);
delete(alien.laptop.ram);
console.log(alien);