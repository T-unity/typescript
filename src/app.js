const items = [
  {
    name: 'iPhone',
    price: 54800
  },
  {
    name: 'Android',
    price: 49800
  }
]

console.log(items)

const names = items.map(x => x.name)
console.log(names)

const prices = items.map(x => x.price)
console.log(prices)
