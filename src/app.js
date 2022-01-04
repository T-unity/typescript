let someMan = {
  name: 'ももたろー',
  age: 48,
};

function greet() {
  console.log(`hello, ${someMan.name}`);
}
function getBirthYear() {
  return new Date().getFullYear() - someMan.age;
}

greet();
console.log(getBirthYear());
