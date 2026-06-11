// fetch("url")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const person = {
  name: "JkM",
  cousins: ["Hero", "Hena", "Chaca"],
  age: 23,
  country: "BD",
  family: {
    father: "B.B",
    mother: "F.N",
  },
};
const keys = Object.values(person);

console.log(keys);
