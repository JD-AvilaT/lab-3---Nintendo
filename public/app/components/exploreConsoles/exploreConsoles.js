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
                <h1>Explora las consolas de videojuegos</h1>
                <img src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_1200/ncom/en_US/switch/site-design-update/switch-family-es">
                <div class="down">
                    <p>Familia Nintendo Switch</p>
                    <button><strong>Más detalles</strong></button>
                </div>
                
            </section>
            `;
        }
    }
}
customElements.define("explore-consoles", ExploreConsoles);
export default ExploreConsoles;
