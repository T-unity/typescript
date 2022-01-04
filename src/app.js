const player = { name: 'Jon', comment: 'Im strong', rate: 782}
for(let prop in player) {
  if(!player.hasOwnProperty(prop)) continue;
  console.log(prop + ': ' + player[prop]);
}
