/*****************************************************************************/
/*****************************************************************************/

/** Functions
 *
 *
 */

/*****************************************************************************/
/** Example of Tight Coupling */
// var person1 = {
//   name: "Nabeel",
//   sayHi: function () {
//     document.write("<br> Person1: " + this.name);
//   },
// };
// person1.sayHi();

/*****************************************************************************/
/** Example of 'this' replacing the need for tight coupling*/
// function SayHelloForAll() {
//   document.write("<br> PersonX: " + this.name);
// }

// var name = "Someone";

// var person1 = {
//   name: "Nabeel",
//   SayHi: SayHelloForAll,
// };

// var person2 = {
//   name: "Kirmani",
//   SayHi: SayHelloForAll,
// };

// person1.SayHi();
// person2.SayHi();
// SayHelloForAll();

/*****************************************************************************/
/** 'this' object is the calling object which also solves the problem of tight coupling 
    3 methods that allow you to change the value of 'this' object
*/
/** THE call METHOD -> When you need to call a function with a specific
 * this context and a known number of arguments.*/
// function SayHelloForAll(label) {
//   document.write("<br>" + label + this.name);
// }

// var name = "Someone";

// var person1 = {
//   name: "Nabeel",
// };

// var person2 = {
//   name: "Kirmani",
// };

// SayHelloForAll.call(person1, "Person1: ");
// SayHelloForAll.call(person2, "Person2: ");
// SayHelloForAll.call(this, "Global: ");

/** THE apply METHOD -> When you want to call a function with this context
 * and arguments are already in an array or array-like object.*/
// function SayHelloForAll(label) {
//   document.write("<br>" + label + this.name);
// }

// var name = "Someone";

// var person1 = {
//   name: "Nabeel",
// };

// var person2 = {
//   name: "Kirmani",
// };

// SayHelloForAll.apply(person1, ["Person1: "]);
// SayHelloForAll.apply(person2, ["Person2: "]);
// SayHelloForAll.apply(this, ["Global: "]);

/** THE bind METHOD -> When you want to create a new function with a
 * specific this context that can be called later.*/
// function SayHelloForAll(label) {
//   document.write("<br>" + label + this.name);
// }

// var person1 = {
//   name: "Nabeel",
// };

// var person2 = {
//   name: "Kirmani",
// };

// var name = "Someone";
// var SayHiToPerson1 = SayHelloForAll.bind(person1);
// var SayHiToPerson2 = SayHelloForAll.bind(person2, "Person2: ");

// SayHiToPerson1("Person1: ");
// SayHiToPerson2();
// SayHelloForAll.call(this, "Global: ");

/*****************************************************************************/
/*****************************************************************************/

/** Constructors
 *
 *
 */

/** Constructor is a function that will create the object with a 'new' operator.
 * Advantage of constructor is that the objects that are created by the constructor
 * will have the same properties of that constructor.
 */
// function SayHelloForAll() {
//   this.name = "Nabeel";
//   this.SayHi = function () {
//     document.write("<br> Person1: " + this.name);
//   };
// }
// var person1 = new SayHelloForAll();
// person1.SayHi();
/*****************************************************************************/

/** Having the same property not value example */
// function SayHelloForAll(name) {
//   this.name = name;
//   this.SayHi = function () {
//     document.write("<br> Person1: " + this.name);
//   };
// }
// var person1 = new SayHelloForAll("Nabeel");
// var person2 = new SayHelloForAll("Kirmani");
// person1.SayHi();
// person2.SayHi();

/*****************************************************************************/

/** Inheritance
 *
 *
 */
// function Employee(name) {
//   this.name = name;
// }
// Employee.prototype.getName = function () {
//   console.log(this.name);
// };
// var emp = new Employee("Nabeel");
// emp.getName();

// function Manager(name) {
//   this.name = name;
// }
// var man = new Manager("Kirmani");
// // man.__proto__ // <- this points to the Manager prototype
// // man.__proto__.__proto__ // <- this points to the object !important
// // to get this Manager function point to the Employee prototype:
// man.__proto__.__proto__ = Employee.prototype;
// man.getName();

/** GPT-4o Example of Inheritance */
// function Vehicle(make, model) {
//   this.make = make;
//   this.model = model;
// }

// Vehicle.prototype.displayInfo = function () {
//   console.log(`${this.make} ${this.model}`);
// };

// function Car(make, model, year) {
//   Vehicle.call(this, make, model); // Inherit properties
//   this.year = year;
// }

// Car.prototype = Object.create(Vehicle.prototype); // Inherit methods
// Car.prototype.constructor = Car;

// Car.prototype.displayCarInfo = function () {
//   console.log(`${this.year} ${this.make} ${this.model}`);
// };

// const myCar = new Car("Toyota", "Corolla", 2020);
// myCar.displayInfo(); // Output: Toyota Corolla
// myCar.displayCarInfo(); // Output: 2020 Toyota Corolla

/****************** RefactorU ************************************************/
/***************** JavaScript Course *****************************************/

/**
 *
 *
 */
// var names = ["chris", "sean", "raine"];
// console.log(names.join(", "));
/*****************************************************************************/
/** Procedural way -> impure function as it modifies a global variable names*/
// var names = ["chris", "sean", "raine"];
// for (var i = 0; i < names.length; i++) {
//   var firstLetter = names[i][0];
//   var rest = names[i].slice(1);
//   names[i] = firstLetter.toUpperCase() + rest;
// }
// console.log(names.join(", "));
/*****************************************************************************/
/** Method Way -> Pure function as it doesn't modify variables outside itself*/
// var names = ["chris", "sean", "raine"];
// console.log(names.join(", "));

// var capitalizeNames = function (inputNames) {
//   var outputNames = [];
//   for (var i = 0; i < inputNames.length; i++) {
//     var firstLetter = inputNames[i][0];
//     var rest = inputNames[i].slice(1);
//     outputNames.push(firstLetter.toUpperCase() + rest);
//   }
//   return outputNames;
// };
// console.log(capitalizeNames(names).join(", "));

// /**** Map */
// var names = ["chris", "sean", "raine"];
// var capitalNames = names.map(function (item) {
//   /** map hides the logic of the for loop and
//    * executes a function on every item inside of the variable */
//   var firstLetter = item[0];
//   var rest = item.slice(1);
//   return firstLetter.toUpperCase() + rest;
// });

// console.log(capitalNames);

/**** Map */
// var names = ["chris", "sean", "raine"];
// var capitalizeName = function(name) {
//   var firstLetter = name[0];
//   var rest = name.slice(1);
//   return firstLetter.toUpperCase() + rest;
// }
// console.log(names.map(capitalizeName).join(', '));

/********Exercise */
// // 1.
// var pluralize = function (word, number) {
//   return number === 1 ? word : word + "s";
// };

// // 4.
// function getVictimInfo() {
//   var v = {};
//   v.name = prompt("Please enter your name:");
//   v.phone = prompt("Please enter your phone number:");
//   v.street = prompt("Please enter your street:");
//   return v;
// }

// var victim = getVictimInfo();
// alert(
//   "Thank you! Victim entered: \n" +
//     victim.name +
//     ", " +
//     victim.phone +
//     ", " +
//     victim.street
// );

// // 6.
// var someArray1 = [
//   "Kirmani",
//   0,
//   null,
//   "Nabeel",
//   "",
//   77,
//   undefined,
//   64,
//   NaN,
//   false,
//   23,
// ];

// function removeFalsyValuesInPlace(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (!arr[i]) {
//       arr.splice(i, 1);
//     }
//   }
// }

// removeFalsyValuesInPlace(someArray1);
// console.log(someArray1);

// 7.
// var someArray2 = [
//   "Kirmani",
//   0,
//   null,
//   "Nabeel",
//   "",
//   77,
//   undefined,
//   64,
//   NaN,
//   false,
//   23,
// ];

// console.log(someArray2.filter(Boolean));
// let person = {
//   name: "Nabeel",
//   age: 30,
// };

// let selection = "name";
// person[selection] = "Kirmani";
// console.log(person.name);

// /** Example of an Object Oriented Programming OOP */

// // traditional
// function getWage(baseSalary, overTime, rate) {
//   baseSalary = 30_000;
//   overTime = 10;
//   rate = 20;
//   return baseSalary + overTime * rate;
// }

// console.log(getWage());

// // OOP
// let employee = {
//   baseSalary: 30_000,
//   overTime: 10,
//   rate: 20,
//   getWage: function () {
//     return this.baseSalary + this.overTime * this.rate;
//   },
// };
// console.log(employee.getWage());

// // declaring functions
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("draw");
//   },
// };
// circle.draw();

// // Factory Function - returns an object
// function createCircle(radius) {
//   return {
//     radius: radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }
// const circle = createCircle(1); // note that in Factory Function, new keyword is not required
// circle.draw();

// // Constructor Function - new keyword is required
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
//   // return this; // happens automatically therefore no need to write it.
// }
// // if new is not used here, then the 'this' keyword will define
// // a global object which will mess up the rest of the code having the same name.
// // JS therefore prefers the Factory Function.
// const anotherCircle = new Circle(1);
// anotherCircle.draw();

// // use let instead of var
// let x = {}; // JS engine will read this ask ```let x = new Object();```

// //another example:
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }
// Circle.call({}, 1); // This is exactly the same as const anotherCircle = new Circle(1);
// Circle.apply({}, [1]);

// // getters and setters
// const person = {
//   firstName: "Nabeel",
//   lastName: "Kirmani",
//   get fullName() { // getter
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) { // setter
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };
// console.log(person);
// person.fullName = 'John Smith';
// console.log(person);

// // problems with var
// /**
//  * var attaches to the window object.
//  * it is function-scoped, while let and const are block scoped (as most languages are).
//  *
// */

// // cloning an object:
// //
// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };

// // old approach
// // const another = {};
// // for (let key in circle) another[key] = circle[key];
// // console.log(another);

// // new approach
// // const another = Object.assign(
// //   {
// //     color: "yellow", // another {} can be empty or have any other property like color here
// //   },
// //   circle
// // );
// // console.log(another);

// //even better approach using spread (...) operator
// const another = { ...circle }; // this will put all properties and methods of circle and put in {}
// console.log(another);

// /*** 'this' keyword
//  *
//  *
//  *
//  * it references the object that is executing the current function
//  *
//  *
//  * rule of thumb:
//  * (1) if the function is a part of the object, then we call it method and 'this' will then
//  * reference to the object itself
//  *  method -> object
//  *
//  * (2 )if the function is a regular function (not part of an object), then 'this' will then
//  * reference to the global object (i.e. window object in browsers, global object in node)
//  *  function -> global (window, global)
//  */
// // example of method -> object
// const video = {
//   title: "a",
//   play() {
//     console.log(this);
//   },
// };
// video.stop = function () {
//   console.log(this);
// };
// video.stop(); // output: {title: 'a', play: f, stop: f}

// // example of function -> global (window, global)
// const video2 = {
//   title: "b",
//   play() {
//     console.log(this);
//   },
// };
// function Video2(title) {
//   // constructor function
//   this.title = title;
//   console.log(this);
// }
// const v2 = new Video2("c"); // Output: Video2 {title: 'c'}
// // when new object is created, 'this' will reference a new empty object
// // hence  the output is c instead of b

// const videoWithTitle = {
//   title: "TITLE: ",
//   tags: ["VIDEO A", "VIDEO B", "VIDEO C"],
//   showTags() {
//     this.tags.forEach(function (tagIndex) {
//       console.log(this.title, tagIndex);
//       // here 'this' will reference the window object
//       // which is global. coz forEach() is a regular function unlike showTags()
//     }, this); // here 'this' will reference to the 'thisArg?: any' property of forEach()
//   }, // note that not all JS functions allow you to pass 'this' propery like forEach()
// };
// videoWithTitle.showTags();

// /**Template literals
//  *
//  */
// const message = "This is my\n" + "'first' message"; // without the string literal
// console.log(message);
// const another = `This is my
// 'first' message`; // with the string literal
// console.log(another);

// // using placeholders in template literals:
// const someName = "Nabeel";
// const emailMessage = `Hi ${someName} ${2024 - 1991},
// Regards.`; // you can also call functions btw
// console.log(emailMessage);

// /** JS Array Filter using => */
// /** Note that arrow function does not binds this */
// const someNumbers = [1, -1, 2, 3];
// const someFilter = someNumbers.filter(function (value) {
//   return value >= 0;
// });
// console.log(someFilter);
// // the above code is similar to:
// const someFilter2 = someNumbers.filter((value) => value >= 0);
// console.log(someFilter2); // note the => arrow. "filter value where value >=0"

// /** JS Array Reduce using accumulator */
// const someNumbers = [1, -1, 2, 3];

// // method 1
// let sum = 0;
// for (let n of someNumbers) sum += n;
// console.log(sum); // Output: 5

// // now using the Reduce method to do the same thing:
// // first round a = 0, c = 1 => a = 1
// // second round a = 1, c = -1 => a = 0
// // third round a = 0, c = 2 => a = 2
// // fourth round a = 2, c = 3 => a = 5
// console.log(
//   someNumbers.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0 // 0 is to initialize the accumulator to 0.
//   )
// ); // Output: 5

// // now using the Reduce method to do the same thing but not initilizing the accumulator:
// // first round a = 1, c = -1 => a = 0
// // second round a = 0, c = 2 => a = 2
// // third round a = 2, c = 3 => a = 5

// // const sum3 = someNumbers.reduce(
// //   (accumulator, currentValue) => accumulator + currentValue
// // );
// console.log(
//   someNumbers.reduce((accumulator, currentValue) => accumulator + currentValue)
// ); // Output: 5

// /** Constructors with Inheritance */
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   walk() {
//     console.log("Walk");
//   }
// }

// class Teacher extends Person {
//   constructor(name, degree) {
//     super(name);
//     this.degree = degree;
//   }

//   teach() {
//     console.log("Teach");
//   }
// }

// const teacher = new Teacher("Nabeel", "B.E.");
// console.log(teacher);

class DefaultMap extends Map {
  constructor(defaultValue) {
    super();
    this.defaultValue = defaultValue;
  }
  get(key) {
    return this.has(key) ? super.get(key) : this.defaultValue;
  }
}

class Histogram {
  constructor() {
    this.letterCounts = new DefaultMap(0);
    this.totalLetters = 0;
  }
  add(text) {
    for (let char of text.replace(/\s/g, "").toUpperCase()) {
      this.letterCounts.set(char, this.letterCounts.get(char) + 1);
      this.totalLetters++;
    }
  }
  toString() {
    return [...this.letterCounts]
      .map(([l, n]) => [l, (n / this.totalLetters) * 100])
      .filter(([, n]) => n >= 1)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`)
      .join("\n");
  }
}

async function histogramFromStdin() {
  process.stdin.setEncoding("utf-8");
  const histogram = new Histogram();
  for await (let chunk of process.stdin) histogram.add(chunk);
  return histogram;
}

histogramFromStdin().then((histogram) => console.log(histogram.toString()));
