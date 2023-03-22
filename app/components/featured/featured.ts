export enum Attribute1 {
    "img" = "img",
    "notice" = "notice",
    "plataform" = "plataform"
}

class Featured extends HTMLElement{
    img?: string;
    notice?: string;
    plataform?: string;

    static get observedAttributes(){
        const attrs: Record<Attribute1, null>={
            img: null,
            notice: null,
            plataform: null,
        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute1,
        _: string | undefined,
        newValue: string | undefined
    ) {
        switch(propName){
            default:
                this[propName] = newValue;
                break;
        }

        this.render();

    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = 
            `
            <link rel="stylesheet" href="./app/components/featured/feautured.css">
                <section>
                <img src="${this.img}">
                <p><strong>${this.notice}</strong></p>
                <p>${this.plataform}</p>
                </section>
            `;
        }
    }
}

customElements.define("featured-card",Featured);
export default Featured;