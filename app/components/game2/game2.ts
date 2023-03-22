export enum Attribute4 {
    "img" = "img",
    "name" = "name",
    "price" = "price",
    "plataform" = "plataform"
}

class Game2 extends HTMLElement{
    img?: string;
    name?: string;
    price?: string;
    plataform?: string;

    static get observedAttributes(){
        const attrs: Record<Attribute4, null>={
            img: null,
            name: null,
            price: null,
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
        propName: Attribute4,
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

customElements.define("game2-card",Game2);
export default Game2;