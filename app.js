class MemoryPairGame {
    constructor() {
        this.container = document.querySelector('.container');
        this.cartTemplate = `<div class="card">
        <div class="card-back"></div>
        <div class="card-front">
          <div class="card-front-top">
            <div class="card-front-top-number"></div>
            <div class="card-front-top-suit">♠</div>
          </div>
          <div class="card-front-mid">♠</div>
          <div class="card-front-bottom">
            <div class="card-front-bottom-number"></div>
            <div class="card-front-bottom-suit">♠</div>
          </div>
        </div>
        </div>`;
        this.startArr = ['2', '2', '3', '3', '4', '4', '5', '5', 'J', 'J', 'Q', 'Q', 'K', 'K', 'A', 'A'];
        this.checkArr = [];
        this.shuffleArr = this.shuffle(this.startArr);
        this.start = this.start(this.shuffleArr);
    }

    shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    clear() {
        cards.forEach(card => {
            card.classList.remove('card-open');
        })
    }

    start(arr) {
        for (let i = 1; i <= arr.length; i++) {
            this.container.innerHTML += this.cartTemplate;
        }
    }

    openCard(card) {
        if (this.checkArr.length > 2) {
            this.clear();
            this.checkArr = [];
            card.parentNode.classList.add('card-open');
            this.checkArr.push(card.parentNode.dataset.name);
        }

        //check if our arr is full
        if (this.checkArr.length === 2) {

            //check if our card is the same
            if (this.checkArr[0] === this.checkArr[1]) {
                let sameCards = document.querySelectorAll('.card-open');
                setTimeout(() => {
                    sameCards.forEach(card => {
                        card.style.visibility = 'hidden';
                        this.checkArr = [];
                    })
                }, 500);
            }
        }
    }
}

let game = new MemoryPairGame;
let cards = document.querySelectorAll('.card');
let cardBack = document.querySelectorAll('.card-back');

cards.forEach((card, i) => {
    cards[i].dataset.name = game.shuffleArr[i];
    card.querySelector('.card-front-top-number').innerHTML = game.shuffleArr[i];
    card.querySelector('.card-front-bottom-number').innerHTML = game.shuffleArr[i];
});


cardBack.forEach(card => {
    card.addEventListener('click', () => {
        if (!card.parentNode.classList.contains('card-open')) {
            card.parentNode.classList.add('card-open');
            game.checkArr.push(card.parentNode.dataset.name);
        }
        game.openCard(card);
    });
});

