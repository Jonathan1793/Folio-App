"use strict";
const dataCardsArray = [
    {
        dataItemAtr: "web",
        imgSrc: "https://previews.dropbox.com/p/thumb/AB6io_u0MJLRl_yFPw082dTJgWH1NpkRBLN8atWm4nBbtVaYHUYnTWLvKfyc7IHZQFlKFhgsoWE-UGESG7lIpFrK6t2iKQiWDG0Oervrm7L9MXencuVuj5fh1CBqySMEhMaHFJ_O3x9AJj9cm-DgUh2-jerRVbRI83yn6ctT6x5OZhiPIPToF6yDBv89vPBIzvSFeU6sN_vG9E70tKaeWlMT2LVqeGHFmH3xcDRPfppLPi1XnwIkKBVBMuziI6grLNLnV2laCqf8mp5hb69vsIN2EKvHtMNMKHbQbJPcRHcU7O_MBNmupurCZ4VDywJZKlYzD7icEZEE66zMow3X-2xyrmPP1Uf6ODSYQiMKvxnZcHQj8vj0iU1-tQSVYy__nc4/p.jpeg",
        category: "Web Development",
        title: "Food Website",
        modalId: "web-1",
    },
    {
        dataItemAtr: "web",
        imgSrc: "https://previews.dropbox.com/p/thumb/AB59wb093bhf2UIdgb_mzms0urC5TRwXXMLplRdKdrCNzzl8uSUqpr2j8Gc6jcJaKpXwuL0VB27w7InwnF4W7n1OYd088Dy34WX5uBZksE-GwaxYYpfr7aVMhlR_pI0IsRKWd3SKXAEOMuhBAekT6pRng0Ek8tsW271E9M4sT_omIgaB4cpaJ5TPGzf-UqHu7LNLcYrzWuaYizhq3PexA8reZxOApU2t9eg_QGxI7Ur47sofOdIrtV87_-fXGKzxYMjtsGtIXOj-DddWREkLc8JZbU0J3t4NOMfL2XUOdrZAmusMtO6lmVIt__r4DYy0AZPFyPsK8QeKqcqU8tWXzL2BYsrNpFx-1QImh74IpFCEg3kxSvJT08O81tdWAzLXc7w/p.jpeg",
        category: "Web Development",
        title: "Skate Website",
        modalId: "web-2",
    },
    {
        dataItemAtr: "web",
        imgSrc: "https://previews.dropbox.com/p/thumb/AB4SdaasT4Ywi50X9B0HCrRS1UoDVyXqQy3ZIa8ldeob2oAbsFzAjyFliZz4sEoSwl7XP8Ux3ivkzG5RDtMI093mll4KLzkFS5I_sSthzfTcD483L9vUG4oX0aDtpMiOlmZD1_6jrAIirXF2j6PykuOnBPaOOtMPJfLGZjpHCsIcbdTJrHRLT0uTJvN7xX_rFDU66lguEtbVPq6OB0VBM4Om7oHp8NPQuM6MY5gMA9Cvnt9q228W_EtkbeClw_Pv_i3vJo1jha_qacp3PJ0IyR2gDLUgCG7dFTBmo0DRfPRS1_97y-5kHqJZmnxBMjLvUQdldjL-fT6LjSs3co4wQoPvmLXzNPqhda9Z8oAtMIeT7zK9eQN7LRJdukW__T0NA0o/p.jpeg",
        category: "Web Development",
        title: "Eating Website",
        modalId: "web-3",
    },
    {
        dataItemAtr: "ui",
        imgSrc: "https://previews.dropbox.com/p/thumb/AB4rGJfNB9wefIO4f-CAxR567xgubUzg1XKxX380E0NdkYD2tcjo8JTMVadnESIJW38J1XPIYI9Kq0T8Hskkuit0JlnOQcJ6AOjZGArf-dvbI23iqtxXy9wwoEgdI9o10PkT-Wt9NNxtcs3IB6D-sDcF5nvWPNqYCXB-NddkuveuJsvNK4lDKSaH0SoWFsrYE8fXPfXKOYlDmhIEhnWpPYFnEjMd_FqRSg4k8Yp3M7VDRPLDjBSnj7xGYoGYTOoQWX-S_sLIOliJmBcMOrMXUhA6KCgRZtH0pSxdIIGFOvELuQLejtilq4COari6IalieNPPxfPT70HhUxi_fvoyw9AETzRtGctD1qG7TZgV_p3fnkumgsIk5opW-Y07nlQIATU/p.jpeg",
        category: "UI Design",
        title: "Cool Design",
        modalId: "ui-1",
    },
    {
        dataItemAtr: "app",
        imgSrc: "https://previews.dropbox.com/p/thumb/AB5GruRWL_c5KspKP4AfK5t0_F6Ab0XbZdE0A8EltTY2BQXJj_Is--Tl9_wkYS8D3D7-lzf_SpfzmGG_gLZvBcXPz4La9E0tCdXtGjsMzexthnfkMlRkpZQhVfD0H-N0Lhf6snhkBW4JHE-9ysDVJ5tGzMQvFS5vLoJ5IuDPqK_UNs103qjSOmnK7Ybr9KWlTkESw0b0EM6JWSF8aLyF6I6Ufvy0lG_-kpCIBiRh5JkkN4nl6h08JCyJGyDpVQ_VZNameZwNEaURto_3RZlx9_3Q4ot-dabU_iHDsipgixlR96XVpjW3Q_e0IpwDLgSc0mKcPVP_iU2J64mAfY3C6rL0QLQt01KNf30cm5BDhxe1qk_4PdAHNLHCqQc4s-v9sF0/p.jpeg",
        category: "App Development",
        title: "Game App",
        modalId: "app-1",
    },
    {
        dataItemAtr: "app",
        imgSrc: "https://previews.dropbox.com/p/thumb/AB7zaKKY07WC-Hfmo_bUz2S1fQoBxKm1tbZELOl3FEVjHy21cYnWToH5RHW2Ieg_YAzatBsocW5p0SPq5Harm995Bb5jGQXVU4_fowpSyljEXZsMetknTGI556wXBkN3-EIYInAkE9kpe5JjIS2sEV6FL1Bd-njxXzKxjLOciDXV2Cduyuq9EL7dQ8l5mUElKl2Q0WkfT55ZmnHuv9N2Ebi_xUBiEz27uGEebCB15VWwfYYc6_hALfQcc6yk85XWCuMBRmpVeHmTxW58DLyveAj-wBVmvZQvuhrcTgKVOKtEVQF83UX9rksaLttARlbmhI2Gj6YG25mSmn7FKdHd5vI3co21A068StMYCabNWFKzH2kZ6fKBWzy9MtkBkdeAknQ/p.jpeg",
        category: "App Development",
        title: "Gambling App",
        modalId: "app-2",
    },
    {
        dataItemAtr: "app",
        imgSrc: "https://previews.dropbox.com/p/thumb/AB7hHToRzmJuEAVSLIVJrTaQcBlvwq_HRzFAy3paY7maTHMO_UrQ2rJUKw_bZ0Ob2zHgiM0KV6FyCvvq9AMNPYFwQ1NbiJk0uw9u3fAOGOUCUBrM7-GUoV8rIQwT7PFLQ82-RdgcUrNYjDAdCFE_aan336cDl9GZm9Mk1JL0JR2Xe2ElZH0lRVaGyms-M7n8rK1OdFfGCVP_XibymORqip8rsmo2MHmToMKOLVlcrvr1YFuWqFqBrjxJxjyUh4vBnVaFp-ilmkEpkfHGNKGu0w5hXlNDiRarFHu51Bzw0RGRFjWBYKEeKwYuzQ9bUcrl-0E_pt9f_OcZ2focrKT4S6KIXfLBMBsy-DkWCHuWDMNP6kylUIjKeXtwjd-uhAunPsk/p.jpeg",
        category: "App Development",
        title: "Money App",
        modalId: "app-3",
    },
    {
        dataItemAtr: "ui",
        imgSrc: "https://previews.dropbox.com/p/thumb/AB6rGaBHOiEnHNiNnmojhUs2SgZymZ5pfMFqcp76_wVDUBQMp1fdjYUIAvDnJfOLym6sWZbXRVP82wLhZVB08OnKi-SNq3isbYk0-prROrGfEAJN5jBmmFu0dlkwuRNXwMZsvMbMKjRhd3Yg3gr3ueryZHMODBPDlshFkE5BaP-pUnCPialhW83UzIIIYaP3pVcX9Bmnwcu7gkvF5rRRkfFGx0Lr6qDePKZmXZGRURLDhBP6HaS4KwXi2SOjv8pZsUTS445lBbyeN6IyKpaaX-iKfveorMJfyEVuBvt_HI_9gc581bVsr1Z9nG1n98RyVClzVC_14_Qg3ZfCoKDB8FBLzTK2Gnv8fKWs1pBIrBX8Y3P8f_H2Ntj0UBKPNSbo-zM/p.jpeg",
        category: "UI Design",
        title: "Fantastic Design",
        modalId: "ui-2",
    },
];
const theme = "theme";
const dataTheme = "data-theme";
const themeTab = ".theme-tab";
const switcherBtn = ".switcher-btn";
const dark = "dark";
const light = "light";
const openTheme = "open";
const activeButton = "active";
const modalOpen = "[data-open]";
const modalClose = "[data-close]";
const isVisible = "is-visible";
const dataFilter = "[data-filter]";
const dataCards = "[data-item]";
const modalArrayVisited = [];
const root = document.documentElement;
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);
const filterLink = document.querySelectorAll(dataFilter);
let closeModal = document.querySelectorAll(modalClose);
const searchBar = document.querySelector("#search");
const setActive = (elm, selector) => {
    var _a;
    if (document.querySelector(`${selector}.${activeButton}`) !== null) {
        (_a = document
            .querySelector(`${selector}.${activeButton}`)) === null || _a === void 0 ? void 0 : _a.classList.remove(activeButton);
    }
    elm.classList.add(activeButton);
};
const portfolioGrid = document.querySelector(".portfolio-grid");
const generateCards = (dataCardsArray) => {
    for (let card of dataCardsArray) {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("portfolio-card");
        cardContainer.setAttribute("data-item", card.dataItemAtr);
        cardContainer.setAttribute("data-open", card.modalId);
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const img = document.createElement("img");
        img.setAttribute("src", card.imgSrc);
        img.setAttribute("alt", "portfolio icon");
        const cardPopUpBox = document.createElement("div");
        cardPopUpBox.classList.add("card-popup-box");
        const category = document.createElement("div");
        category.innerHTML = card.category;
        const title = document.createElement("h3");
        title.innerHTML = card.title;
        cardContainer.appendChild(cardBody);
        cardBody.appendChild(img);
        cardBody.appendChild(cardPopUpBox);
        cardPopUpBox.appendChild(category);
        cardPopUpBox.appendChild(title);
        portfolioGrid === null || portfolioGrid === void 0 ? void 0 : portfolioGrid.appendChild(cardContainer);
    }
};
generateCards(dataCardsArray);
const portfolioItems = document.querySelectorAll(dataCards);
const modalHandler = (itemId, dataTitle, url) => {
    if (!modalArrayVisited.includes(itemId)) {
        const modalWrapper = document.createElement("div");
        modalWrapper.classList.add("modal");
        modalWrapper.setAttribute("id", itemId);
        modalWrapper.setAttribute("data-animation", "slideInOut");
        const modalDialog = document.createElement("div");
        modalDialog.classList.add("modal-dialog");
        const modalHeader = document.createElement("header");
        modalHeader.classList.add("modal-header");
        const headerTitle = document.createElement("h3");
        headerTitle.innerHTML = `${dataTitle === null || dataTitle === void 0 ? void 0 : dataTitle.toUpperCase()} Project`;
        const icon = document.createElement("i");
        icon.classList.add("fas", "fa-times");
        icon.setAttribute("data-close", "");
        const modalBody = document.createElement("div");
        modalBody.classList.add("modal-body");
        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("img-wrapper");
        const smallImage = document.createElement("img");
        smallImage.setAttribute("src", url);
        smallImage.setAttribute("alt", "portfolio Image");
        const textWrapper = document.createElement("div");
        textWrapper.classList.add("text-wrapper");
        const textStrong = document.createElement("p");
        const text2 = document.createElement("p");
        text2.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
  reprehenderit eum voluptas explicabo`;
        const text3 = document.createElement("p");
        text3.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
  nam alias ratione`;
        const strongTag = document.createElement("strong");
        strongTag.innerHTML = `My awesome ${dataTitle} Project`;
        modalWrapper.appendChild(modalDialog);
        modalDialog.appendChild(modalHeader);
        modalHeader.appendChild(headerTitle);
        modalHeader.appendChild(icon);
        modalDialog.appendChild(modalBody);
        modalBody.appendChild(imgWrapper);
        imgWrapper.appendChild(smallImage);
        modalBody.appendChild(textWrapper);
        textWrapper.appendChild(textStrong);
        textStrong.appendChild(strongTag);
        textWrapper.appendChild(text2);
        textWrapper.appendChild(text3);
        document.body.children[1].appendChild(modalWrapper);
        let closeModal = document.querySelectorAll(modalClose);
        addClosingEvents(closeModal);
        modalArrayVisited.push(itemId);
    }
};
portfolioItems.forEach((card) => {
    card.addEventListener("click", () => {
        modalHandler(card.getAttribute("data-open"), card.getAttribute("data-item"), card.children[0].children[0].getAttribute("src"));
    });
});
const openModal = document.querySelectorAll(modalOpen);
const setTheme = (val) => {
    if (val === dark) {
        root.setAttribute(dataTheme, dark);
        localStorage.setItem(theme, dark);
    }
    else {
        root.setAttribute(dataTheme, light);
        localStorage.setItem(theme, light);
    }
};
if (currentTheme) {
    root.setAttribute(dataTheme, currentTheme);
    switcher.forEach((btn) => {
        btn.classList.remove(activeButton);
    });
    if (currentTheme === dark) {
        switcher[1].classList.add(activeButton);
    }
    else {
        switcher[0].classList.add(activeButton);
    }
}
toggleTheme === null || toggleTheme === void 0 ? void 0 : toggleTheme.addEventListener("click", function () {
    const tab = this.parentElement.parentElement;
    if (!(tab === null || tab === void 0 ? void 0 : tab.className.includes(openTheme))) {
        tab === null || tab === void 0 ? void 0 : tab.classList.add(openTheme);
    }
    else {
        tab.classList.remove(openTheme);
    }
});
for (const button of switcher) {
    button.addEventListener("click", function () {
        const toggle = this.dataset.toggle;
        setActive(button, switcherBtn);
        setTheme(toggle);
    });
}
searchBar === null || searchBar === void 0 ? void 0 : searchBar.addEventListener("keyup", (event) => {
    const inputSearchValue = event.target.value;
    portfolioItems.forEach((card) => {
        var _a;
        if ((_a = card.dataset.item) === null || _a === void 0 ? void 0 : _a.includes(inputSearchValue)) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }
    });
});
for (const link of filterLink) {
    link.addEventListener("click", function () {
        setActive(link, ".filter-link");
        const filter = this.dataset.filter;
        portfolioItems.forEach((card) => {
            if (filter === "all") {
                card.style.display = "block";
            }
            else if (filter === card.dataset.item) {
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }
        });
    });
}
for (const el of openModal) {
    el.addEventListener("click", function () {
        var _a;
        const modalId = this.dataset.open;
        (_a = document.getElementById(modalId)) === null || _a === void 0 ? void 0 : _a.classList.add(isVisible);
    });
}
const addClosingEvents = (closeModal) => {
    for (const el of closeModal) {
        el.addEventListener("click", function () {
            this.parentElement.parentElement.parentElement.classList.remove(isVisible);
        });
    }
};
addClosingEvents(closeModal);
document.addEventListener("click", (event) => {
    var _a;
    if (event.target === document.querySelector(".modal.is-visible")) {
        (_a = document.querySelector(".modal.is-visible")) === null || _a === void 0 ? void 0 : _a.classList.remove(isVisible);
    }
});
document.addEventListener("keyup", (event) => {
    var _a;
    if (event.key === "Escape") {
        (_a = document.querySelector(".modal.is-visible")) === null || _a === void 0 ? void 0 : _a.classList.remove(isVisible);
    }
});
const elmsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elms-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");
if (marqueeContent != undefined) {
    root.style.setProperty("--marquee-elms", (marqueeContent === null || marqueeContent === void 0 ? void 0 : marqueeContent.children.length).toString());
}
for (let i = 0; i < parseInt(elmsDisplayed); i++) {
    marqueeContent === null || marqueeContent === void 0 ? void 0 : marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
//# sourceMappingURL=main.js.map