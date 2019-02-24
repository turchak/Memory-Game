import Card from "./card";

class Game {
    constructor(host) {
        this.set = this.shuffle(['2', '2', '3', '3', '4', '4', '5', '5', 'J', 'J', 'Q', 'Q', 'K', 'K', 'A', 'A']);
        this.host = host;
        
        this.init();
    }

    init() {
        this.host.addEventListener('click', ev => {
            ev.target.classList.add('active')
        })
        this.set.forEach(el => new Card(this.host, el).element)
    };
    
    shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };
}

export default Game;