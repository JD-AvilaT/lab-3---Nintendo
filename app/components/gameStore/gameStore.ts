class GameStore extends HTMLElement{
    
    constructor(){
        super();
        this.attachShadow({ mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = 
            `
            <link rel="stylesheet" href="./app/components/gameStore/gameStore.css">

            <section>
                <h1>Tienda de juegos</h1>
                <img src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_1200/ncom/es_LA/merchandising/homepage-banners/4576x744_LATAM_GameStoreBanner_01_SP">
                <div class="down">
                    <p>¡Compra, descarga y juega de inmediato!</p>
                    <button><strong>Compra juegos</strong></button>
                </div>
                
            </section>
            `
        }
    }
}


customElements.define("game-store",GameStore);
export default GameStore;