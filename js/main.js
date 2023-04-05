"use strict";
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
const root = document.documentElement;
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);
const setActive = (elm, selector) => {
    var _a;
    if (document.querySelector(`${selector}.${activeButton}`) !== null) {
        (_a = document
            .querySelector(`${selector}.${activeButton}`)) === null || _a === void 0 ? void 0 : _a.classList.remove(activeButton);
    }
    elm.classList.add(activeButton);
};
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
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);
for (const el of openModal) {
    el.addEventListener("click", function () {
        var _a;
        const modalId = this.dataset.open;
        (_a = document.getElementById(modalId)) === null || _a === void 0 ? void 0 : _a.classList.add(isVisible);
    });
}
for (const el of closeModal) {
    el.addEventListener("click", function () {
        this.parentElement.parentElement.classList.remove(isVisible);
    });
}
//# sourceMappingURL=main.js.map