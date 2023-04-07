"use strict";
const dataCardsArray = [
    {
        dataItemAtr: "web",
        imgSrc: "./assets/images/portfolio-1.jpg",
        category: "Web Development",
        title: "Food Website",
    },
    {
        dataItemAtr: "web",
        imgSrc: "./assets/images/portfolio-2.jpg",
        category: "Web Development",
        title: "Skate Website",
    },
    {
        dataItemAtr: "web",
        imgSrc: "./assets/images/portfolio-3.jpg",
        category: "Web Development",
        title: "Eating Website",
    },
    {
        dataItemAtr: "ui",
        imgSrc: "./assets/images/portfolio-4.jpg",
        category: "UI Design",
        title: "Cool Design",
    },
    {
        dataItemAtr: "app",
        imgSrc: "./assets/images/portfolio-5.jpg",
        category: "App Development",
        title: "Game App",
    },
    {
        dataItemAtr: "app",
        imgSrc: "./assets/images/portfolio-6.jpg",
        category: "App Development",
        title: "Gambling App",
    },
    {
        dataItemAtr: "app",
        imgSrc: "./assets/images/portfolio-7.jpg",
        category: "App Development",
        title: "Money App",
    },
    {
        dataItemAtr: "ui",
        imgSrc: "./assets/images/portfolio-8.jpg",
        category: "UI Design",
        title: "Fantastic Design",
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
const root = document.documentElement;
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);
const filterLink = document.querySelectorAll(dataFilter);
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
        cardContainer.setAttribute("data-open", "web-1");
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const img = document.createElement("img");
        img.setAttribute("src", card.imgSrc);
        img.setAttribute("alt", "portfolio icon");
        const cardPopUpBox = document.createElement("a");
        cardPopUpBox.setAttribute("href", "#");
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
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);
const portfolioItems = document.querySelectorAll(dataCards);
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
    console.log(activeButton);
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
for (const el of closeModal) {
    el.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
}
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
//# sourceMappingURL=main.js.map