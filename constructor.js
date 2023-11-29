//constructor function in javascript

// It need to start with "capital letter" and while creating a function we need to use "new" keyword
function Alien(name,tech){    //capital letter
  this.name = name
  this.tech = tech
  this.work = function() {  /// Thia is a method in constructor function
    console.log("Hello");
  }
}
let alien1 = new Alien("srikanth","python") ///new keyword
let alien2 = new Alien('ramu','JS')
console.log(alien1); //Alien { name: 'srikanth', tech: 'python' }
console.log(alien2); //Alien { name: 'ramu', tech: 'JS' }
alien1.tech= "DSA"
console.log(alien1);
alien1.work()

///Lets do one constructor function example of laptop
function Laptop(name,cpu,ram){
  this.name = name
  this.cpu = cpu
  this.ram = ram
}
let laptop1 = new Laptop("macbook",'i8','8gb')
let laptop2 = new Laptop("hp",'i9','10gb')
console.log(laptop1);//Laptop { name: 'macbook', cpu: 'i8', ram: '8gb' }
console.log(laptop2);//Laptop { name: 'hp', cpu: 'i9', ram: '10gb' }