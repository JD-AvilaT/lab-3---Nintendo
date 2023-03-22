export var Attribute2;
(function (Attribute2) {
    Attribute2["img"] = "img";
    Attribute2["date"] = "date";
    Attribute2["notice"] = "notice";
})(Attribute2 || (Attribute2 = {}));
class Notice extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            img: null,
            date: null,
            notice: null,
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
            <link rel="stylesheet" href="./app/components/notice/notice.css">
                <section>
                    <img src="${this.img}">
                    <p>${this.date}</p>
                    <p><strong>${this.notice}</strong></p>
                    <a>Leer más</a>
                </section>
            `;
        }
    }
}
customElements.define("notice-card", Notice);
export default Notice;
