"use strict";
const dataCardsArray = [
    {
        dataItemAtr: "web",
        imgSrc: "https://media.discordapp.net/attachments/1098447973702172732/1098448207895339008/portfolio-1.jpg",
        category: "Web Development",
        title: "Food Website",
        modalId: "web-1",
    },
    {
        dataItemAtr: "web",
        imgSrc: "https://media.discordapp.net/attachments/1098447973702172732/1098448208587403344/portfolio-2.jpg",
        category: "Web Development",
        title: "Skate Website",
        modalId: "web-2",
    },
    {
        dataItemAtr: "web",
        imgSrc: "https://media.discordapp.net/attachments/1098447973702172732/1098448208855826464/portfolio-3.jpg",
        category: "Web Development",
        title: "Eating Website",
        modalId: "web-3",
    },
    {
        dataItemAtr: "ui",
        imgSrc: "https://media.discordapp.net/attachments/1098447973702172732/1098448209115881544/portfolio-4.jpg?width=522&height=671",
        category: "UI Design",
        title: "Cool Design",
        modalId: "ui-1",
    },
    {
        dataItemAtr: "app",
        imgSrc: "https://media.discordapp.net/attachments/1098447973702172732/1098448209392709713/portfolio-5.jpg",
        category: "App Development",
        title: "Game App",
        modalId: "app-1",
    },
    {
        dataItemAtr: "app",
        imgSrc: "https://media.discordapp.net/attachments/1098447973702172732/1098448209635967046/portfolio-6.jpg",
        category: "App Development",
        title: "Gambling App",
        modalId: "app-2",
    },
    {
        dataItemAtr: "app",
        imgSrc: "https://media.discordapp.net/attachments/1098447973702172732/1098448209933770822/portfolio-7.jpg",
        category: "App Development",
        title: "Money App",
        modalId: "app-3",
    },
    {
        dataItemAtr: "ui",
        imgSrc: "https://media.discordapp.net/attachments/1098447973702172732/1098448207190695996/portfolio-8.jpg",
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