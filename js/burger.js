const burger = document.querySelector('.header__top_burger');
if (burger) {
  const burgerMenu = document.querySelector('.header__top_burger-nav');
  burger.addEventListener("click", function(e) {
    document.body.classList.toggle('_lock');
    burger.classList.toggle('_active');
    burgerMenu.classList.toggle('_active');
  })
}
