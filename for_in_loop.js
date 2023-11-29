//for in javascript
let employee = {
  name:'srikanth',
  salary:120000,
  age:21,
  laptop: {
    cpu:'i8',
    ram: 8,
    rom: '1TB',
  }
}
console.log(employee);
//output
// {
//   name: 'srikanth',
//   salary: 120000,
//   age: 21,
//   laptop: { cpu: 'i8', ram: 8, rom: '1TB' }
// }
for(let key in employee)
{
  console.log(key);
}
//output
// name
// salary
// age
// laptop
for(let key in employee)
{
  console.log(key,employee[key]);
}
//output
// name srikanth
// salary 120000
// age 21
// laptop { cpu: 'i8', ram: 8, rom: '1TB' }

for(let key in employee.laptop)
{
  console.log(key,employee.laptop[key]);
}
//output
//cpu i8
// ram 8
// rom 1TB