const FORM_INPUT = document.querySelector(".form__search-line");
const FORM = document.querySelector(".form");

FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  const VALUE = FORM_INPUT.value;
  FORM_INPUT.value = "";
})