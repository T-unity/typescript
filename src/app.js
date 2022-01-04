const player = { name: 'Jon', comment: 'Im strong', rate: 782}
for(let prop in player) {
  if(!player.hasOwnProperty(prop)) continue;
  console.log(prop + ': ' + player[prop]);
}


// class score {}

// class Food {
//   constructor(public element) {}
// }

// class Foods {
//   elements = document.querySelectorAll('.food');
//   constructor() {
//     this.elements.forEach(element => {
//       new Food(element);
//     })
//   }
// }
// const foods = new Foods();
