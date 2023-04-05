//Theme Variables
const theme: string = "theme";
const dataTheme: string = "data-theme";
const themeTab: string = ".theme-tab";
const switcherBtn: string = ".switcher-btn";
const dark: string = "dark";
const light: string = "light";
const openTheme: string = "open";
const activeButton: string = "active";
//Modal Variables
const modalOpen: string = "[data-open]";
const modalClose: string = "[data-close]";
const isVisible: string = "is-visible";

//Miscellanies Variables
const root = document.documentElement;
// '.switcher-btn.active'
//theme
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);
//.switcher-btn.active
//setting active class
const setActive = (elm: Element, selector: string) => {
  if (document.querySelector(`${selector}.${activeButton}`) !== null) {
    document
      .querySelector(`${selector}.${activeButton}`)
      ?.classList.remove(activeButton);
  }
  elm.classList.add(activeButton);
};

//sets and toggles between themes
const setTheme = (val: string) => {
  if (val === dark) {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
  } else {
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
  } else {
    switcher[0].classList.add(activeButton);
  }
}

toggleTheme?.addEventListener("click", function (this: HTMLElement) {
  const tab = this.parentElement!.parentElement;
  if (!tab?.className.includes(openTheme)) {
    tab?.classList.add(openTheme);
  } else {
    tab.classList.remove(openTheme);
  }
});

for (const button of switcher) {
  button.addEventListener("click", function (this: HTMLElement) {
    const toggle = this.dataset.toggle!;
    //set active state
    setActive(button, switcherBtn);
    setTheme(toggle);
  });
}

//modal
const openModal: NodeList = document.querySelectorAll(modalOpen);
const closeModal: NodeList = document.querySelectorAll(modalClose);

// Full size modal "Open Buttons"
for (const el of openModal) {
  el.addEventListener("click", function (this: any) {
    const modalId: string = this.dataset.open;
    document.getElementById(modalId)?.classList.add(isVisible);
  });
}

for (const el of closeModal) {
  el.addEventListener("click", function (this: any) {
    this.parentElement.parentElement.classList.remove(isVisible);
  });
}
