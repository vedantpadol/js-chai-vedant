const firstname = "Vedant"
const repoCount = 1

// console.log(name + repoCount + " Value"); old way 

console.log(`My name is ${firstname} and my repo count is ${repoCount}`)

const gameName = new String('vedant-vp-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));