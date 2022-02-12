document.addEventListener('DOMContentLoaded', () => {

  const editionsBtn = document.querySelector('.section-editions__btn');
  const editionsFormLabel = document.querySelectorAll('.section-editions__form-label');
  const editionsFormInput = document.querySelectorAll('.section-editions__form-input');
  const editionsBtnArrow = document.querySelector('.section-editions__btn-arrow');

  const showActiveCheckbox = () => {
    editionsFormInput.forEach(el => {
      if (el.checked === true) {
        el.parentNode.classList.add('active')
      }
    })
  }

  const editionsAccordion = () => {
    editionsBtn.addEventListener('click', () => {
      editionsBtnArrow.classList.toggle('section-editions__arrow-active');
      editionsFormLabel.forEach(el => {
        el.classList.toggle('active')
        showActiveCheckbox();
      })
    })
  }

  const editionsCheck = () => {
    for (let i = 0; i < editionsFormInput.length; i++) {
      const el = editionsFormInput[i];
      el.addEventListener('change', () => {
        if (!el.checked && !editionsBtnArrow.classList.contains('section-editions__arrow-active')) {
          el.parentNode.classList.remove('active');
        }

        showActiveCheckbox();
      })
    }

    showActiveCheckbox();
  }

  editionsAccordion();
  editionsCheck();

})
