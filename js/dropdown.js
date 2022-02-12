  // function myFunction(element) {
  //   var dropdowns = document.getElementsByClassName("header__bottom_dropdown-content");

  //   var thisDropdown = element.nextSibling.nextSibling;

  //   if (!thisDropdown.classList.contains('show')) {
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       dropdowns[i].classList.remove('show');
  //     }
  //   }

  //   thisDropdown.classList.toggle("show");
  // }

document.addEventListener('DOMContentLoaded', () => {

  const dropdownLink = document.querySelectorAll('.header__bottom_dropbtn');
  const dropdownSubmenu = document.querySelectorAll('.header__bottom_dropdown-content');
  const dropdownArrow = document.querySelectorAll('.arrow');

  dropdownLink.forEach((el, index) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();

      const dropdownSubmenuClassList = dropdownSubmenu[index].classList;
      if (dropdownSubmenuClassList.contains('show')) {
        dropdownSubmenuClassList.remove('show')
        dropdownArrow[index].classList.remove('arrow_active')

      } else {
        dropdownSubmenu.forEach((el) => el.classList.remove('show'))
        dropdownSubmenuClassList.add('show')
        dropdownArrow.forEach((el) => el.classList.remove('arrow_active'))
        dropdownArrow[index].classList.add('arrow_active')
      }
    });
  });


  window.onclick = function(event) {
    if (!event.target.matches('.header__bottom_dropbtn')) {
      let dropdowns = document.getElementsByClassName('header__bottom_dropdown-content');
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }

    if (!event.target.matches('.header__bottom_dropbtn')) {
      let dropArrows = document.getElementsByClassName('arrow');
      let i;
      for (i = 0; i < dropArrows.length; i++) {
        let openDropdown = dropArrows[i];
        if (openDropdown.classList.contains('arrow_active')) {
          openDropdown.classList.remove('arrow_active');
        }
      }
    }
  }
})
