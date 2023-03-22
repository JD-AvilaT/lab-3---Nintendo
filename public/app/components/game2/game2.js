export var Attribute4;
(function (Attribute4) {
    Attribute4["img"] = "img";
    Attribute4["name"] = "name";
    Attribute4["price"] = "price";
    Attribute4["plataform"] = "plataform";
})(Attribute4 || (Attribute4 = {}));
class Game2 extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            img: null,
            name: null,
            price: null,
            plataform: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML =
                `
            <link rel="stylesheet" href="./app/components/game2/game2.css">
                <section>
                    <div class="up">
                        <img src="${this.img}">
                        <p><strong>${this.name}</strong></p>
                    </div>
                    <div class="down">
                        <p><strong>${this.price}</strong></p>
                        <p>${this.plataform}</p>
                    </div>
                </section>
            `;
        }
    }
}
customElements.define("game2-card", Game2);
export default Game2;
