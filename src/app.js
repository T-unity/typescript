
class score {}

class Food {
  constructor(element) {
    // super();
    element.addEventListener('click', this.clickEventHandler);
    // element.addEventListener('click', this.clickEventHandler.bind(this));
  }
  clickEventHandler() {
    // console.log(this);
    // console.log(this.element);
    // this.element.classList.toggle('food--active');
    this.classList.toggle('food--active');
  }
}

class Foods {
  elements = document.querySelectorAll('.food');
  constructor() {
    this.elements.forEach(element => {
      new Food(element);
    })
  }
}
const foods = new Foods();
