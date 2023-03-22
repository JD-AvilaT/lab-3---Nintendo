import "./components/index.js";
import DataFeatured from "./dataFeatured.js";
import DataNotice from "./dataNotice.js";
import DataGame1 from "./dataGame1.js";
import DataGame2 from "./dataGame2.js";
import { Attribute1 } from "./components/featured/featured.js";
import { Attribute2 } from "./components/notice/notice.js";
import { Attribute3 } from "./components/game1/game1.js";
import { Attribute4 } from "./components/game2/game2.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.featuredList = [];
        this.noticeList = [];
        this.gameList1 = [];
        this.gameList2 = [];
        this.attachShadow({ mode: "open" });
        DataFeatured.forEach((user) => {
            const featuredCard = this.ownerDocument.createElement("featured-card");
            featuredCard.setAttribute(Attribute1.img, user.img);
            featuredCard.setAttribute(Attribute1.notice, user.notice);
            featuredCard.setAttribute(Attribute1.plataform, user.plataform);
            this.featuredList.push(featuredCard);
        });
        DataNotice.forEach((user) => {
            const noticeCard = this.ownerDocument.createElement("notice-card");
            noticeCard.setAttribute(Attribute2.img, user.img);
            noticeCard.setAttribute(Attribute2.date, user.date);
            noticeCard.setAttribute(Attribute2.notice, user.notice);
            this.noticeList.push(noticeCard);
        });
        DataGame1.forEach((user) => {
            const gameCard1 = this.ownerDocument.createElement("game1-card");
            gameCard1.setAttribute(Attribute3.img, user.img);
            gameCard1.setAttribute(Attribute3.name, user.name);
            gameCard1.setAttribute(Attribute3.price, user.price);
            gameCard1.setAttribute(Attribute3.plataform, user.plataform);
            this.gameList1.push(gameCard1);
        });
        DataGame2.forEach((user) => {
            const gameCard2 = this.ownerDocument.createElement("game2-card");
            gameCard2.setAttribute(Attribute4.img, user.img);
            gameCard2.setAttribute(Attribute4.name, user.name);
            gameCard2.setAttribute(Attribute4.price, user.price);
            gameCard2.setAttribute(Attribute4.plataform, user.plataform);
            this.gameList2.push(gameCard2);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a, _b, _c, _d;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `<nav-bar></nav-bar>`;
            this.shadowRoot.innerHTML += `<cereza-intro></cereza-intro>`;
            this.shadowRoot.innerHTML += `<h1 class="featuredTitle">Destacados</h1>`;
            const featuredSection = this.ownerDocument.createElement("section");
            featuredSection.className = "featuredSection";
            this.featuredList.forEach((featured) => {
                featuredSection.appendChild(featured);
            });
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(featuredSection);
            this.shadowRoot.innerHTML += `<link rel="stylesheet" href="./app/index.css">`;
            this.shadowRoot.innerHTML += `<game-store></game-store>`;
            this.shadowRoot.innerHTML += `<explore-consoles></explore-consoles>`;
            this.shadowRoot.innerHTML += `<h1 class="noticeTitle">Novedades</h1>`;
            const noticeSection = this.ownerDocument.createElement("section");
            noticeSection.className = "noticeSection";
            this.noticeList.forEach((notice) => {
                noticeSection.appendChild(notice);
            });
            (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(noticeSection);
            this.shadowRoot.innerHTML += `<h1 class="gameTitle1">Lo más vendidos de Nintendo Switch</h1>`;
            const gameSection1 = this.ownerDocument.createElement("section");
            gameSection1.className = "gameSection1";
            this.gameList1.forEach((game1) => {
                gameSection1.appendChild(game1);
            });
            (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(gameSection1);
            this.shadowRoot.innerHTML += `<h1 class="gameTitle2">Nuevos lanzamientos de Nintendo Switch</h1>`;
            const gameSection2 = this.ownerDocument.createElement("section");
            gameSection2.className = "gameSection2";
            this.gameList2.forEach((game2) => {
                gameSection2.appendChild(game2);
            });
            (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.appendChild(gameSection2);
        }
    }
}
customElements.define("app-container", AppContainer);
