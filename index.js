const collection = [
    {
        front_text: "car",
        back_text: "car",
        dataset: "car"
    },
    {
        front_text: "cat",
        back_text: "cat",
        dataset: "cat"
    },
    {
        front_text: "lion",
        back_text: "lion",
        dataset: "lion"
    },
    {
        front_text: "dino",
        back_text: "dino",
        dataset: "dino"
    },
    {
        front_text: "power",
        back_text: "power",
        dataset: "power"
    },
    {
        front_text: "monster",
        back_text: "monster",
        dataset: "monster"
    },
    {
        front_text: "drive",
        back_text: "drive",
        dataset: "drive"
    },
    {
        front_text: "spike",
        back_text: "spike",
        dataset: "spike"
    },
    {
        front_text: "car",
        back_text: "car",
        dataset: "car"
    },
    {
        front_text: "cat",
        back_text: "cat",
        dataset: "cat"
    },
    {
        front_text: "lion",
        back_text: "lion",
        dataset: "lion"
    },
    {
        front_text: "dino",
        back_text: "dino",
        dataset: "dino"
    },
    {
        front_text: "power",
        back_text: "power",
        dataset: "power"
    },
    {
        front_text: "monster",
        back_text: "monster",
        dataset: "monster"
    },
    {
        front_text: "drive",
        back_text: "drive",
        dataset: "drive"
    },
    {
        front_text: "spike",
        back_text: "spike",
        dataset: "spike"
    }
]

const cards = document.querySelectorAll('[data-card]')

let oneCard = []

cards.forEach(card => {
    oneCard.push(card)
})

for(let i = 0; i < collection.length; i++) {
    const front_text = document.createElement('div')
    const back_text = document.createElement('div')

    front_text.innerText = collection[i].front_text
    back_text.innerText = collection[i].back_text

    front_text.classList.add('front')
    back_text.classList.add('back')

    front_text.onclick = checker

    oneCard[i].append(front_text)
    oneCard[i].append(back_text)
    oneCard[i].dataset.card = collection[i].dataset
}

function flip(e) {
    e.target.classList.toggle('flip')
}

cards.forEach(card => {
    card.addEventListener('click', flip)
})


let hasFlip = false

let firstCard, secondCard

function checker(e) {
    
    
    if(!hasFlip) {
        hasFlip = true
        firstCard = e.currentTarget.parentNode
        console.log(firstCard)
    } else {
        hasFlip = false
        secondCard = e.currentTarget.parentNode

        if(firstCard.dataset.card === secondCard.dataset.card) {
            console.log("correct")
        } else {

            setTimeout(()=> {
                secondCard.classList.remove('flip')
                firstCard.classList.remove('flip')
            }, 1200)
            
            
        }
    }

    

    

}




