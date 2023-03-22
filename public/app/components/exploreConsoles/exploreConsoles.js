class ExploreConsoles extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML =
                `
            <link rel="stylesheet" href="./app/components/exploreConsoles/exploreConsoles.css">

            <section>
                <h2>Explora las consolas de videojuegos</h2>
                <img src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_1200/ncom/en_US/switch/site-design-update/switch-family-es">
                <div class=""down">
                    <p>Familia Nintendo Switch</p>
                    <button>Más detalles</button>
                </div>
                
            </section>
            `;
        }
    }
}
customElements.define("explore-consoles", ExploreConsoles);
export default ExploreConsoles;
