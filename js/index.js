// we use const to avoid mistake in name (avoiding antipattern magic string and numbers)
const STORAGE_KEY = "nameOfKey";

const formData = {};

const refs = {
  textarea: document.getElementById("textarea"),
  form: document.getElementById("form"),
  name: document.getElementById("name"),
};

refs.form.addEventListener(
  "submit",
  onFormSubmit
);

refs.form.addEventListener("input", onFormInput);

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();
  // since user submitted form we reset form
  evt.currentTarget.reset();
  // and clearing localStorage only exactly that key
  localStorage.removeItem("STORAGE_KEY");
}

function onFormInput(e) {
  // take formData and in this key put this value
  formData[e.target.name] = e.target.value;

  const stringFormData = JSON.stringify(formData);
  console.log(stringFormData);
  localStorage.setItem(
    "STORAGE_KEY",
    stringFormData
  );
}

function populateTextarea() {
  const savedMessage = JSON.parse(
    localStorage.getItem("STORAGE_KEY")
  );

  // we need to check if there is something, if user first time on this page there will be null
  if (savedMessage) {
    refs.name.value = savedMessage.name;
    refs.textarea.value = savedMessage.textarea;
  }
}
