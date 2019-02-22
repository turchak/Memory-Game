class Card {
    constructor(host, name) {
        this.host = host;
        this.name = name;
        this.isOpen = false;
    }
  
    get element() {
      this.host.innerHTML = this.render();
    }
  
    get opened() {
      return this.isOpen;
    }
  
    toggle() {
      this.isOpen = !this.isOpen;
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