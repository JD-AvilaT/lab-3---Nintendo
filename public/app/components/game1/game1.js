export var Attribute3;
(function (Attribute3) {
    Attribute3["img"] = "img";
    Attribute3["name"] = "name";
    Attribute3["price"] = "price";
    Attribute3["plataform"] = "plataform";
})(Attribute3 || (Attribute3 = {}));
class Game1 extends HTMLElement {
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
            <link rel="stylesheet" href="./app/components/game1/game1.css">
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
customElements.define("game1-card", Game1);
export default Game1;
