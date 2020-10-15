var fruits = [
  {
    name: 'Lemon',
    img: 'https://bit.ly/2wQwmYG',
    rotten: false,
    id: 0
  },
  {
    name: 'Lime',
    img: 'https://bit.ly/344kBtA',
    rotten: false,
    id: 1
  },
  {
    name: 'Apple',
    img: 'https://bit.ly/2X1v3AJ',
    rotten: true,
    id: 2
  }
]

// Query Selector
var fruitBox = document.querySelector('.fruit-box')

function render() {
fruitBox.innerHTML = '';

  fruits.forEach(fruit => {
    let fruitDiv = `
      <div class="fruit">
        <h2>${fruit.name}</h2>
        <img src="${fruit.img}" />
        <button data-id=0>Lick</button>
      </div>
    `
    fruitBox.innerHTML += fruitDiv;
  })
}

render()
// addFruit('Banana', 'https://bit.ly/3bNpVnT', false)
// removeFruit(0) 