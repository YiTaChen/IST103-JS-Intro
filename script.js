// Activity 1
// alert("Hello World");

// Activity 2
const name = "Adam";
const age = 30;
const hasCats = true;

let dream;
let job = null;

console.log("This person's name is " + name);
console.log(name + " is " + age + " years old");
console.log(name + " has cats: " + hasCats);
console.log(name + "'s dream job is " + dream);
console.log(name + "'s current job is " + job);

// Activity 3
let todoList = [
  "Drink coffee in the afternoon.",
  "Do the daily mission of games on my cell phone.",
  "Watch unseen animes and movies",
  "Have a greate buffet dinner.",
];

let todoListCount = todoList.length;

let myThermosFlask = {
  objectName: "Thermos Flask",
  color: "white",
  size: "medium",
  material: "stainless steel",
  isInWarranty: true,
  price: 150,
};

console.log("There are " + todoList.length + " things to do.");
console.log("The last thing to do is: " + todoList[todoList.length - 1]);

console.log(
  "And I will carry my " +
    myThermosFlask.material +
    " " +
    myThermosFlask.objectName +
    " with me."
);
