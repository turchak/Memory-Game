class Card {
    constructor(name, index) {
        this.host = document.createElement('div');
        this.host.classList.add('card')
        this.name = name;
        this.isOpen = false;
        this.index = index;
        this.element;
        this.handleClick = this.handleClick.bind(this);
        this.host.addEventListener('click', this.handleClick);
    }

    handleClick(ev) {
        this.toggle();
    }
    
    close() {
        this.host.hidden.true
    }
  
    toggle() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
          this.host.classList.add('card-open');
          return;
      }
      this.host.classList.remove('card-open');
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