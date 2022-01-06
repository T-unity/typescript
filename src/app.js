
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
    // console.log(this.querySelector('.food__score').innerHTML);
  }
}

class Foods {
  elements = document.querySelectorAll('.food');

  _activeElements = [];
  _activeElementsScore = [];

  get activeElements() {
    this._activeElements = [];
    this.elements.forEach(element => {
      if (element.classList.contains('food--active')) {
        this._activeElements.push(element);
      }
    })
    return this._activeElements;
  }

  get activeElementsScore() {
    this._activeElementsScore = [];
    this.activeElements.forEach(element => {
      const foodScore = element.querySelector('.food__score');
      if (foodScore) {
        this._activeElementsScore.push(Number(foodScore.textContent));
      }
    })
    return this._activeElementsScore;
  }

  constructor() {
    this.elements.forEach(element => {
      new Food(element);
    })
  }
}
const foods = new Foods();
