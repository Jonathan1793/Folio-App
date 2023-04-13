interface cardStructure {
  dataItemAtr: string;
  imgSrc: string;
  category: string;
  title: string;
  modalId: string;
}

const dataCardsArray: cardStructure[] = [
  {
    dataItemAtr: "web",
    imgSrc: "./assets/images/portfolio-1.jpg",
    category: "Web Development",
    title: "Food Website",
    modalId: "web-1",
  },
  {
    dataItemAtr: "web",
    imgSrc: "./assets/images/portfolio-2.jpg",
    category: "Web Development",
    title: "Skate Website",
    modalId: "web-2",
  },
  {
    dataItemAtr: "web",
    imgSrc: "./assets/images/portfolio-3.jpg",
    category: "Web Development",
    title: "Eating Website",
    modalId: "web-3",
  },
  {
    dataItemAtr: "ui",
    imgSrc: "./assets/images/portfolio-4.jpg",
    category: "UI Design",
    title: "Cool Design",
    modalId: "ui-1",
  },
  {
    dataItemAtr: "app",
    imgSrc: "./assets/images/portfolio-5.jpg",
    category: "App Development",
    title: "Game App",
    modalId: "app-1",
  },
  {
    dataItemAtr: "app",
    imgSrc: "./assets/images/portfolio-6.jpg",
    category: "App Development",
    title: "Gambling App",
    modalId: "app-2",
  },
  {
    dataItemAtr: "app",
    imgSrc: "./assets/images/portfolio-7.jpg",
    category: "App Development",
    title: "Money App",
    modalId: "app-3",
  },
  {
    dataItemAtr: "ui",
    imgSrc: "./assets/images/portfolio-8.jpg",
    category: "UI Design",
    title: "Fantastic Design",
    modalId: "ui-2",
  },
];

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
// Menu portfolio variables
const dataFilter = "[data-filter]";
const dataCards = "[data-item]";
/* Miscellanies Variables */
const modalArrayVisited: string[] = [];
const root = document.documentElement;
/* Selectors part */
/* theme */
const toggleTheme = document.querySelector(themeTab); //gets first item with given selector
const switcher = document.querySelectorAll(switcherBtn); //gets array of given selector
const currentTheme = localStorage.getItem(theme); //gets the variable team from local storage

/* Portfolio */
const filterLink = document.querySelectorAll(dataFilter);
let closeModal: NodeList = document.querySelectorAll(modalClose);
const searchBar = document.querySelector("#search");
//setting active class

const setActive = (elm: Element, selector: string) => {
  if (document.querySelector(`${selector}.${activeButton}`) !== null) {
    document
      .querySelector(`${selector}.${activeButton}`)
      ?.classList.remove(activeButton);
  }
  elm.classList.add(activeButton);
};

/* generate portfolio cards dynamically */

const portfolioGrid = document.querySelector(".portfolio-grid");

const generateCards = (dataCardsArray: Array<cardStructure>) => {
  for (let card of dataCardsArray) {
    const cardContainer = document.createElement("div");
    //creates outer div of element card
    cardContainer.classList.add("portfolio-card");
    cardContainer.setAttribute("data-item", card.dataItemAtr);
    cardContainer.setAttribute("data-open", card.modalId);
    //generates card body for the card
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

    portfolioGrid?.appendChild(cardContainer);
  }
};
generateCards(dataCardsArray);

/* Gotta create this variables below after creating the items for it to find the correct selectors */

const portfolioItems = document.querySelectorAll<HTMLElement>(dataCards);

const modalHandler = (itemId?: string, dataTitle?: string, url?: string) => {
  if (!modalArrayVisited.includes(itemId!)) {
    const modalWrapper = document.createElement("div");
    modalWrapper.classList.add("modal");
    modalWrapper.setAttribute("id", itemId!);
    modalWrapper.setAttribute("data-animation", "slideInOut");

    const modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog");

    const modalHeader = document.createElement("header");
    modalHeader.classList.add("modal-header");
    const headerTitle = document.createElement("h3");
    headerTitle.innerHTML = `${dataTitle?.toUpperCase()} Project`;
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-times");
    icon.setAttribute("data-close", "");

    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("img-wrapper");

    const smallImage = document.createElement("img");
    smallImage.setAttribute("src", url!);
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
    modalArrayVisited.push(itemId!);
  }
};
portfolioItems.forEach((card) => {
  card.addEventListener("click", () => {
    modalHandler(
      card.getAttribute("data-open")!,
      card.getAttribute("data-item")!,
      card.children[0].children[0].getAttribute("src")!
    );
  });
});

const openModal: NodeList = document.querySelectorAll(modalOpen);

//sets and toggles between themes
const setTheme = (val?: string) => {
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
    const toggle = this.dataset.toggle;
    //set active state
    setActive(button, switcherBtn);
    setTheme(toggle);
  });
}

searchBar?.addEventListener("keyup", (event: Event) => {
  //search bar Handler
  const inputSearchValue = (event.target as HTMLInputElement).value;
  console.log(activeButton);
  portfolioItems.forEach((card) => {
    if (card.dataset.item?.includes(inputSearchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

for (const link of filterLink) {
  link.addEventListener("click", function (this: HTMLElement) {
    setActive(link, ".filter-link");
    const filter = this.dataset.filter;
    portfolioItems.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block";
      } else if (filter === card.dataset.item) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

//modal

// Full size modal "Open Buttons"
for (const el of openModal) {
  el.addEventListener("click", function (this: any) {
    const modalId: string = this.dataset.open;
    document.getElementById(modalId)?.classList.add(isVisible);
  });
}

const addClosingEvents = (closeModal: NodeList) => {
  for (const el of closeModal) {
    el.addEventListener("click", function (this: any) {
      this.parentElement.parentElement.parentElement.classList.remove(
        isVisible
      );
    });
  }
};

addClosingEvents(closeModal);

/* modal */
document.addEventListener("click", (event) => {
  if (event.target === document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible")?.classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    document.querySelector(".modal.is-visible")?.classList.remove(isVisible);
  }
});
