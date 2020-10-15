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

var fruitBox = document.querySelector('.fruit-box')

function render() {
let fruitHTML = '';

  fruits.forEach(fruit => {
    let fruitTitle = fruit.rotten ? `Rotten ${fruit.name}` : fruit.name;
    
    fruitHTML += `
      <div class="fruit">
        <h2>${fruitTitle}</h2>
        <img src="${fruit.img}" />
        <button data-id=${fruit.id}>Lick</button>
      </div>
    `
    fruitBox.innerHTML = fruitHTML;
  })
}

function addFruit(name, img, rotten) {
  let newFruit = {
    name,
    img,
    rotten,
    id: fruits.length
  }
  
  fruits.push(newFruit);
  render();
}

function removeFruit(id) {
  let fruitIdx = fruits.findIndex(fruit => fruit.id === id);
  fruits.splice(fruitIdx, 1);
  render();
}

function turnRotten(e) {
  let fruitId = Number(e.target.dataset.id);
  let lickedFruit = fruits.find(fruit => fruit.id == fruitId);
  lickedFruit.rotten = true;
  render();
}

render();
addFruit('Banana', 'https://bit.ly/3bNpVnT', false); 
removeFruit(0); 

fruitBox.addEventListener('click', turnRotten);