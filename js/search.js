document.addEventListener('DOMContentLoaded', () => {

 const search = document.querySelector('.header__top_search-form');
 const searchBtn = document.querySelector('.header__top_search-btn');
 const searchInput = document.querySelector('.header__bottom_search-input');
 const searchClose = document.querySelector('.header__top_search-close');

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchInput.classList.add('header__bottom_search-input_active');
    search.classList.add('search_active');
    searchClose.classList.add('header__top_search-close_active');
  })

  searchClose.addEventListener('click', (e) => {
    e.preventDefault();
    searchInput.classList.remove('header__bottom_search-input_active');
    search.classList.remove('search_active');
    searchClose.classList.remove('header__top_search-close_active');
  })

  window.addEventListener('click', (event) => {
    if (!search.contains(event.target)) searchInput.classList.remove('header__bottom_search-input_active');
    if (!search.contains(event.target)) search.classList.remove('search_active');
    if (!search.contains(event.target)) searchClose.classList.remove('header__top_search-close_active');
  });

})
