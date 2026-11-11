const greet = (name, age) => `Hello, ${name}! You are ${age} years old`;

const people = ["Alice", "Bob"];
const age = "21";
people.forEach((person) => console.log(greet(person, age)));
