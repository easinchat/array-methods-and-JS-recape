const person = {
  name: "JkM",
  cousins: ["Hero", "Hena", "Chaca"],
  age: 23,
  country: "BD",
};

const makeJson = JSON.stringify(person);
// console.log(makeJson);
/////////////////

const makePlaneData = JSON.parse(makeJson);
console.log(makePlaneData);
