<label>
  Имя
  <input type="text" class="js-input">
</label>
<p>
  <label>
    <input type="checkbox" class="js-license">
    Лицензия 
  </label>
</p>
<button type="submit" disabled class="js-button">Зарегестрироваться как <span>аноним</span></button>



const refs = {
  input: document.querySelector('.js-input'),
  licenseCheckbox: document.querySelector('.js-license'),
  button: document.querySelector('.js-button'),
  nameLabel: document.querySelector('.js-button > span'),
}

refs.input.addEventListener('input', onInputChange);
function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
}

refs.licenseCheckbox.addEventListener('change', onCheckboxChange);
function onCheckboxChange(event) {
  refs.button.disabled = !event.currentTarget.checked;
}