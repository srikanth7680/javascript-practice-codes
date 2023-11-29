///This keyword
let laptop1 = {
    cpu:'i10',
    ram:8,
    brand:'MacBook',
    getConfig: function(){
      console.log(this.cpu);
    }
}
laptop1.getConfig()
//
let laptop2 = {
  cpu:'i12',
  ram:8,
  brand:'MacBook',
  getConfig2: function(){
    console.log(this.cpu);
  }
}
laptop2.getConfig2()



///another example
let data = {
  name: 'srikanth',
  age: 23,
  greet: function() {
    console.log(`Hello,this is ${this.name}`);
  }
}
data.greet();//Hello,this is srikanth
x = data.greet() // It will give undefined because here it will lose a this keyword.
