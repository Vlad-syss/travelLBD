window.addEventListener("scroll", event => {
  let header = document.querySelector(".header__row");
  let scrollView = window.pageYOffset || document.documentElement.scrollTop;

  if(scrollView >= 70){
    header.classList.add("scroll");
  }else{
    header.classList.remove("scroll");
  }
})
function smoothScroll(target) {
  const element = document.querySelector(target);
  const headerHeight = document.querySelector('.header__row').offsetHeight;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition =elementPosition  - headerHeight;

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

document.querySelectorAll('.header__list .header__link').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    smoothScroll(item.getAttribute('href'));
    document.querySelector(".header__row").classList.remove("active");
    document.body.classList.remove("lock");
    document.querySelector(".header__burger").classList.remove("active");
  });
});

const element = document.querySelector(".travel__select");
const choices = new Choices(element,{
  searchEnabled: false,
});