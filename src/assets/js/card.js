class Card {
    constructor(name, index) {
        this.host = document.createElement('div');
        this.host.classList.add('card')
        this.name = name;
        this.isOpen = false;
        this.index = index;
        this.element;

    }
  
    get element() {
      this.host.innerHTML = this.render();
    }
  
    get opened() {
      return this.isOpen;
    }
  
    toggle() {
      this.isOpen = !this.isOpen;
      this.element;
    }
  
    render() {
        const string =  `
            <div class="card-back" data-name=${this.name} data-index=${this.index}></div>
            <div class="card-front" data-name=${this.name}>
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
        `
        this.host.innerHTML = string;
        return this.host;
    }
}

export default Card;