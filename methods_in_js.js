//Methods in javascript
//create a object and inside that we need to create a function
let laptop = {
  cpu:'i5',
  brand:'macbook',
  ram:8,
  greet: function(){                    //// method 
    console.log("Hello this is a method");
  }
}
console.log(laptop);
laptop.greet();

// what is a method??
// method is a function that is associated with an object or class
// It is a piece of code that can be executed when it is called.
//Above example shows that greet is a method which is associated with the laptop object.