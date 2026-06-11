const friends = ["Hero", "Hena", "Chaca"];
// const element1 = friends[0];
// const element2 = friends[1];
// const element3 = friends[2];
const [element1, element2, element3] = friends;

// console.log(element3);

const person = {
  name: "JkM",
  cousins: ["Hero", "Hena", "Chaca"],
  age: 23,
  country: "BD",
};

const { name, country, cousins, age } = person;
console.log(cousins);
