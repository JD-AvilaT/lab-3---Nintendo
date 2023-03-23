import "./components/index.js";
import DataFeatured from "./dataFeatured.js"
import DataNotice from "./dataNotice.js"
import DataGame1 from "./dataGame1.js"
import DataGame2 from "./dataGame2.js"
import Featured, {Attribute1} from "./components/featured/featured.js"
import Notice, {Attribute2} from "./components/notice/notice.js"
import Game1, {Attribute3} from "./components/game1/game1.js"
import Game2, {Attribute4} from "./components/game2/game2.js"

class AppContainer extends HTMLElement{
    featuredList: Featured[] = [];
    noticeList: Notice[] = [];
    gameList1: Game1[] = [];
    gameList2: Game2[] = [];

    constructor(){
        super();
        this.attachShadow({ mode: "open"});

        DataFeatured.forEach((user) => {
            const featuredCard = this.ownerDocument.createElement(
                "featured-card"
            ) as Featured;
            featuredCard.setAttribute(Attribute1.img, user.img);
            featuredCard.setAttribute(Attribute1.notice, user.notice);
            featuredCard.setAttribute(Attribute1.plataform, user.plataform);
            this.featuredList.push(featuredCard);

            
        });

        DataNotice.forEach((user) => {
            const noticeCard = this.ownerDocument.createElement(
                "notice-card"
            ) as Notice;
            noticeCard.setAttribute(Attribute2.img, user.img);
            noticeCard.setAttribute(Attribute2.date, user.date);
            noticeCard.setAttribute(Attribute2.notice, user.notice);
            this.noticeList.push(noticeCard);

            
        });

        DataGame1.forEach((user) => {
            const gameCard1 = this.ownerDocument.createElement(
                "game1-card"
            ) as Game1;
            gameCard1.setAttribute(Attribute3.img, user.img);
            gameCard1.setAttribute(Attribute3.name, user.name);
            gameCard1.setAttribute(Attribute3.price, user.price);
            gameCard1.setAttribute(Attribute3.plataform, user.plataform);
            this.gameList1.push(gameCard1);
            
        });

        DataGame2.forEach((user) => {
            const gameCard2 = this.ownerDocument.createElement(
                "game2-card"
            ) as Game2;
            gameCard2.setAttribute(Attribute4.img, user.img);
            gameCard2.setAttribute(Attribute4.name, user.name);
            gameCard2.setAttribute(Attribute4.price, user.price);
            gameCard2.setAttribute(Attribute4.plataform, user.plataform);
            this.gameList2.push(gameCard2);
            
        });
    }

    connectedCallback(){
        this.render();
    
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML += `<nav-bar></nav-bar>`;
        
            this.shadowRoot.innerHTML += `<cereza-intro></cereza-intro>`;

            this.shadowRoot.innerHTML += `<h1 class="featuredTitle">Destacados</h1>`;
            
            const featuredSection = this.ownerDocument.createElement("section");
            featuredSection.className = "featuredSection";

            this.featuredList.forEach((featured) => {
                featuredSection.appendChild(featured)
            });

            this.shadowRoot?.appendChild(featuredSection);

            this.shadowRoot.innerHTML += `<link rel="stylesheet" href="./app/index.css">`;
            
               
            this.shadowRoot.innerHTML += `<game-store></game-store>`;

            this.shadowRoot.innerHTML += `<explore-consoles></explore-consoles>`;

            this.shadowRoot.innerHTML += `<h1 class="noticeTitle">Novedades</h1>`;

            const noticeSection = this.ownerDocument.createElement("section");
            noticeSection.className = "noticeSection";

            this.noticeList.forEach((notice) => {
                noticeSection.appendChild(notice)
            });

            this.shadowRoot?.appendChild(noticeSection);

            this.shadowRoot.innerHTML += `<button class="viewAllNotices">Ver todos los artículos de noticias</button>`

            this.shadowRoot.innerHTML += `
                                        <section class="gameTitle1">
                                            <h1>Lo más vendidos de Nintendo Switch</h1>
                                            <a>Ver la lista completa</a>
                                        </section>
                                        `;

            const gameSection1 = this.ownerDocument.createElement("section");
            gameSection1.className = "gameSection1";

            this.gameList1.forEach((game1) => {
                gameSection1.appendChild(game1)
            });

            this.shadowRoot?.appendChild(gameSection1);

            this.shadowRoot.innerHTML += `<h1 class="gameTitle2">Nuevos lanzamientos de Nintendo Switch</h1>`;

            const gameSection2 = this.ownerDocument.createElement("section");
            gameSection2.className = "gameSection2";

            this.gameList2.forEach((game2) => {
                gameSection2.appendChild(game2)
            });

            this.shadowRoot?.appendChild(gameSection2);
        }
    }


}

customElements.define("app-container", AppContainer);