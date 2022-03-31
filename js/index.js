const menuBtn = document.querySelector(".header__logo i");
const menuNav = document.querySelector(".header__nav");

const menuToggleHandler = () => {
  menuNav.classList.toggle("visible");
};

menuBtn.addEventListener("click", menuToggleHandler);
