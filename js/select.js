const select = () => {
  const elements = document.querySelectorAll('.section-gallery__select');
  elements.forEach(element => {
    const choices = new Choices(element, {
      searchEnabled: false,
      shouldSort: false
    });
  });
}

select ();
