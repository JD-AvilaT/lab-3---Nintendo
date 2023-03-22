export enum Attribute2 {
    "img" = "img",
    "date" = "date",
    "notice" = "notice",
}

class Notice extends HTMLElement{
    img?: string;
    date?: string;
    notice?: string;

    static get observedAttributes(){
        const attrs: Record<Attribute2, null>={
            img: null,
            date: null,
            notice: null,
    
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
        propName: Attribute2,
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

customElements.define("notice-card",Notice);
export default Notice;