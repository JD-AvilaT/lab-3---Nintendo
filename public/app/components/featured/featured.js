export var Attribute1;
(function (Attribute1) {
    Attribute1["img"] = "img";
    Attribute1["notice"] = "notice";
    Attribute1["plataform"] = "plataform";
})(Attribute1 || (Attribute1 = {}));
class Featured extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            img: null,
            notice: null,
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
                <link rel="stylesheet" href="./app/components/featured/featured.css">
                <section>
                    <img src="${this.img}">
                    <div class="down">
                        <h3>${this.notice}</h3>
                        <p>${this.plataform}</p>
                    </div>
                </section>
            `;
        }
    }
}
customElements.define("featured-card", Featured);
export default Featured;
