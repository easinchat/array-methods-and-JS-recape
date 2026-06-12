const handleToStorage = () => {
  let key = document.getElementById("key").value;
  let value = document.getElementById("value").value;

  console.log(key, value);
  //   localStorage.setItem(key, value);
  const data = { key, value };
  localStorage.setItem("data", JSON.stringify(data));
};
const get = localStorage.getItem("data");
console.log(JSON.parse(get));

const clearStorage = () => {
  localStorage.clear();
};
