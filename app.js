const navTriggerEl = document.querySelector(".hamburger");
const navEl = document.querySelector(".nav");
const contentEl = document.querySelector(".content");
const hamburgerBarsEL = document.getElementsByTagName("span");

const toggleNav = () => {
  /* trigger the click, and toggle the menu and content */
  navTriggerEl.addEventListener("click", () => {
    navEl.classList.toggle("open");
    contentEl.classList.toggle("shift");

    addAnimationToBars();
  });
};

//add change class to hamburgare menu and toggle it
const addAnimationToBars = () => {
  for (let item of hamburgerBarsEL) {
    console.log(item);
    item.classList.toggle("change");
  }
};

toggleNav();
