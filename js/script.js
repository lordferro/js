const refs = {
  input: document.querySelector('.js-input'),
  submit: document.querySelector('.js-submit'),
  license: document.querySelector('.js-checkbox'),
  nameInButton: document.querySelector('.js-submit > span'),
}

refs.input.addEventListener('input', onInputChange);
refs.license.addEventListener('change', onCheckboxChange);

function onInputChange(event) {
 return refs.nameInButton.textContent = event.currentTarget.value;
}

function onCheckboxChange(event) {
  return refs.submit.disabled = !refs.license.checked;
}

