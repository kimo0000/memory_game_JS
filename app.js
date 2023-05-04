const cardArray = [
    {
        name: 'pizza',
        image: 'imgs/pizza.jpeg'
    },
    {
        name: 'coca cola',
        image: 'imgs/coka_cola.jpg'
    },
    {
        name: 'bird',
        image: 'imgs/bird.webp'
    },
    {
        name: 'chien',
        image: 'imgs/chien.jpg'
    },
    {
        name: 'mer',
        image: 'imgs/mer.jpg'
    },
    {
        name: 'tiger',
        image: 'imgs/tiger.jpg'
    },
    {
        name: 'apple',
        image: 'imgs/Apple.jpeg'
    },
    {
        name: 'pizza',
        image: 'imgs/pizza.jpeg'
    },
    {
        name: 'coca cola',
        image: 'imgs/coka_cola.jpg'
    },
    {
        name: 'bird',
        image: 'imgs/bird.webp'
    },
    {
        name: 'chien',
        image: 'imgs/chien.jpg'
    },
    {
        name: 'mer',
        image: 'imgs/mer.jpg'
    },
    {
        name: 'tiger',
        image: 'imgs/tiger.jpg'
    },
    {
        name: 'apple',
        image: 'imgs/Apple.jpeg'
    },
];

const score = document.getElementById('score')
const cards = document.querySelector('.content')

let choossenName = []
let choosenId = []
const cardWin = []

cardArray.sort(() => 0.5 - Math.random())

function appendCards() {
    for(let i = 0; i < cardArray.length; i++) {
      let img = document.createElement('img')
      img.setAttribute('src', 'imgs/blanc.webp')
      img.setAttribute('data-id', i)
      img.addEventListener('click', flipcard)
      cards.appendChild(img)
    }
}

appendCards()

function checkMath() {
    const imgs = document.querySelectorAll('img')
    const optionOneId = choosenId[0]
    const optionTwoId = choosenId[1]

    if(optionOneId === optionTwoId) {
       alert('You Clicked A Same Image!')
    }

    if(choossenName[0] === choossenName[1]) {
       alert('You find Same Image!')
       imgs[optionOneId].setAttribute('src', 'imgs/white.jpeg')
       imgs[optionTwoId].setAttribute('src', 'imgs/white.jpeg')
       imgs[optionOneId].removeEventListener('click', flipcard)
       imgs[optionTwoId].removeEventListener('click', flipcard)
       cardWin.push(choossenName)
       //console.log(choossenName)
       //console.log(cardWin)
    } else {
       imgs[optionOneId].setAttribute('src', 'imgs/blanc.webp')
       imgs[optionTwoId].setAttribute('src', 'imgs/blanc.webp')
    }

    score.innerHTML = cardWin.length
    choossenName = []
    choosenId = []

    if(cardWin.length === cardArray.length / 2) {
      score.innerHTML = 'Congratulation You Have Find All Image!'
    }
}

function flipcard(el) {
    let currentId = this.getAttribute('data-id')
    //console.log(el.target.dataset.id)
    //console.log(this.dataset.id)
    choossenName.push(cardArray[currentId].name)
    choosenId.push(currentId)
    this.setAttribute('src', cardArray[currentId].image)
    if(choossenName.length === 2) {
      setTimeout(checkMath, 500)
    }
}

