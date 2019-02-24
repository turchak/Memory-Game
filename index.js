import './src/assets/sass/main';
import Game from './src/assets/js/game';
new Game(document.querySelector('.container'))
// import './src/assets/sass/main';
// import Card from './src/assets/js/card';
// // import './src/assets/js/card';

// const card = {
//     container: document.querySelector('.container'),
//     template: `
//         <div class="card">
//             <div class="card-back"></div>
//             <div class="card-front">
//             <div class="card-front-top">
//                 <div class="card-front-top-number"></div>
//                 <div class="card-front-top-suit">♠</div>
//             </div>
//             <div class="card-front-mid">♠</div>
//             <div class="card-front-bottom">
//                 <div class="card-front-bottom-number"></div>
//                 <div class="card-front-bottom-suit">♠</div>
//             </div>
//             </div>
//         </div>
//     `,
//     startArr: ['2', '2', '3', '3', '4', '4', '5', '5', 'J', 'J', 'Q', 'Q', 'K', 'K', 'A', 'A'],
// };


// class MemoryPairGame {
//     constructor(card) {
//         this.container = card.container;
//         this.cartTemplate = card.template;
//         this.startArr = card.startArr;
//         this.checkArr = [];
//         this.shuffleArr = this.shuffle(this.startArr);
//         this.start = this.start(this.shuffleArr);
//         this.cards = document.querySelectorAll('.card');
//         this.cardsBack = document.querySelectorAll('.card-back');
//         this.openCard('click');
//         this.updateCard(this.cards);
//     }

//     shuffle(arr) {
//         for (let i = arr.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//         return arr;
//     }

//     clear() {
//         this.cards.forEach(card => {
//             card.classList.remove('card-open');
//         })
//     }

//     start(arr) {
//         arr.forEach(item => {
//             this.container.innerHTML += this.cartTemplate;
//         })
//     }

//     checkCard(card) {
//         if (this.checkArr.length > 2) {
//             this.clear();
//             this.checkArr = [];
//             card.parentNode.classList.add('card-open');
//             this.checkArr.push(card.parentNode.dataset.name);
//         }

//         //check if our arr is full
//         if (this.checkArr.length === 2) {

//             //check if our card is the same
//             if (this.checkArr[0] === this.checkArr[1]) {
//                 let sameCards = document.querySelectorAll('.card-open');
//                 setTimeout(() => {
//                     sameCards.forEach(card => {
//                         card.style.visibility = 'hidden';
//                         this.checkArr = [];
//                     })
//                 }, 500);
//             }
//         }
//     }

//     openCard(event) {
//         this.cardsBack.forEach((cardBack) => {
//             cardBack.addEventListener(event, () => {
//                 if (!cardBack.parentNode.classList.contains('card-open')) {
//                     cardBack.parentNode.classList.add('card-open');
//                     this.checkArr.push(cardBack.parentNode.dataset.name);
//                 }
//                 this.checkCard(cardBack);
//             });
//         });

//     }
    
//     updateCard(cards) {
//         cards.forEach((card, i) => {
//             cards[i].dataset.name = this.shuffleArr[i];
//             card.querySelector('.card-front-top-number').innerHTML = this.shuffleArr[i];
//             card.querySelector('.card-front-bottom-number').innerHTML = this.shuffleArr[i];
//         })
//     }
// }

// const game = new MemoryPairGame(card);