import Card from "./card";

class Game {
    constructor(host) {
        this.set = this.shuffle(['2', '2', '3', '3', '4', '4', '5', '5', 'J', 'J', 'Q', 'Q', 'K', 'K', 'A', 'A']);
        this.host = host;
        this.buffer = [];
        this.cards = [];
        // this.init = this.init.bind(this);
        this.init();
    }

    init() {
        this.host.addEventListener('click', ev => {
            console.log(ev.currentTarget)
            this.cards[ev.target.dataset.index].toggle()
            // this.cards[]
            // this.buffer.push(ev.target.dataset.name)
            // console.dir(ev.target)
            // this.checkBuffer()
        })
        this.set.forEach((el,index) => { 
            this.cards.push(new Card(el, index))
            const cards  = this.cards.reduce((acc, val) => {
                acc.push(val.render());
                return acc;
            },[])
            this.host.append(...cards);
        })
    };

    checkBuffer() {
        if(this.buffer.length === 2) {
            if (this.buffer[0] === this.buffer[1]) {
                return 
            }
        }
        return false;
    }
    
    shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };
}

export default Game;