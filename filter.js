const products = [
  {
    name: "Redmi",
    brand: "Xiaomi",
    price: 30000,
    color: "black",
  },
  {
    name: "Nokia",
    brand: "Nokia",
    price: 7000,
    color: "white",
  },
  {
    name: "Samsung",
    brand: "Samsung",
    price: 13000,
    color: "blue",
  },
];

// const result = products.filter((product) => product.price >= 8000);
// console.log(result);
const result = products.find((product) => product.name === "Samsung");
console.log(result);
