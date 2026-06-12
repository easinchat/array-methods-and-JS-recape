// Tarnary operator

const num = 21;

const result = num >= 10 && num <= 20 ? "true" : "false";
// console.log(result);

const isActive = false;

const showUser = () => console.log("Show User");
const hideUser = () => console.log("Hide User");

// showing when it's true or false
isActive ? showUser() : hideUser();

// show when just true other wise nothing
isActive && showUser();

// show when just false other wise nothing
isActive || hideUser();
