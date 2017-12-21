let checkArr = [];
let startArr = ['2', '2', '3', '3', '4', '4', '5', '5', 'J', 'J', 'Q', 'Q', 'K', 'K', 'A', 'A'];
let shuffleArr = shuffle(startArr);
let container = document.querySelector('.container')
let cartTemplate = `<div class="card">
<!-- front -->
<div class="card__front"></div>
<!-- back -->
<div class="card__back">
  <div class="card__back-top">
    <div class="card__back-top-number"></div>
    <div class="card__back-top-suit">♠</div>
  </div>
  <div class="card__back-mid">♠</div>
  <div class="card__back-bottom">
    <div class="card__back-bottom-number"></div>
    <div class="card__back-bottom-suit">♠</div>
  </div>
</div>
</div>`;

for(let i = 1; i <= startArr.length; i++) {
    container.innerHTML += cartTemplate;
}

let cards = document.querySelectorAll('.card');

//clear function for reset table
function clear() {
    cards.forEach(card => {
        card.classList.remove('card__open');
    })
}

//shuffle function for shuffle our cards value
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

//set shuffle value to our cards
cards.forEach(function (card, i) {
    cards[i].dataset.name = shuffleArr[i];
    card.querySelector('.card__back-top-number').innerHTML = shuffleArr[i];
    card.querySelector('.card__back-bottom-number').innerHTML = shuffleArr[i];
})


cards.forEach(card => {
    card.addEventListener('click', function () {
        this.classList.add('card__open');
        checkArr.push(this.dataset.name);

        //check if our arr is full
        if (checkArr.length === 2) {

            //check if our card is the same
            if (checkArr[0] === checkArr[1]) {
                let sameCards = document.querySelectorAll('.card__open');
                setTimeout(function () {
                    sameCards.forEach(card => {
                        card.style.visibility = 'hidden';
                        checkArr = [];
                    })
                }, 500);
            }
        }

        //reset if we try to open 3-rd card
        if (checkArr.length > 2) {
            clear();
            checkArr = [];
            this.classList.add('card__open');
            checkArr.push(this.dataset.name);
        }
    });
});

