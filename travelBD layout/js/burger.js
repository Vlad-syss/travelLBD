let header = document.querySelector(".header__row");
let headerBurger = document.querySelector(".header__burger");

headerBurger.addEventListener("click",e => {
  e.preventDefault();
  headerBurger.classList.toggle("active");
  header.classList.toggle("active");
  document.body.classList.toggle("lock");
})
