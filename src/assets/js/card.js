class Card {
    constructor(name) {
        this.name = name;
    }
  
    get element() {
      // return rendered element
    }
  
    get opened() {
      // returns actual opened
    }
  
    toggle() {
      // changes current card state: opend to closed and vice versa
    }
  
    render() {
        return `
        <div class="card">
            <div class="card-back"></div>
            <div class="card-front">
            <div class="card-front-top">
                <div class="card-front-top-number">${this.name}</div>
                <div class="card-front-top-suit">♠</div>
            </div>
            <div class="card-front-mid">♠</div>
            <div class="card-front-bottom">
                <div class="card-front-bottom-number">${this.name}</div>
                <div class="card-front-bottom-suit">♠</div>
            </div>
            </div>
        </div>
        `
    }
}