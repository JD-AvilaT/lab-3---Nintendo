export enum Attribute3 {
    "img" = "img",
    "name" = "name",
    "price" = "price",
    "plataform" = "plataform"
}

class Game1 extends HTMLElement{
    img?: string;
    name?: string;
    price?: string;
    plataform?: string;

    static get observedAttributes(){
        const attrs: Record<Attribute3, null>={
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
        propName: Attribute3,
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
            <link rel="stylesheet" href="./app/components/game1/game1.css">
                <section>
                    <div class="up">
                        <img src="${this.img}">
                        <p><strong>${this.name}</strong></p>
                    </div>
                    <div class="down">
                        <div class="left">
                            <p><strong>${this.price}</strong></p>
                            <p>${this.plataform}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                        </svg>
                    </div>
                </section>
            `;
        }
    }
}

customElements.define("game1-card",Game1);
export default Game1;