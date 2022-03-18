//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
const allFirstWordUppercase = (string) => {
  return string
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
console.log("string");

let result = allFirstWordUppercase("i am a biG fAN of mahendRA siNgh Dhoni");
console.log(result);
