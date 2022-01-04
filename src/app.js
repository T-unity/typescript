let someMan = {
  name: 'きんたろー',
  age: 48,
};

function greet(man) {
  console.log(`hello, ${man.name}`);
}
function getBirthYear(man) {
  return new Date().getFullYear() - man.age;
}

greet(someMan);
console.log(getBirthYear(someMan));
