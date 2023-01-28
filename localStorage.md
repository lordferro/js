 <form id="form">
  <textarea name="" id="textarea" cols="30" rows="10"></textarea>
 <button type="submit">googo</button>
 </form>


 {
  "name": "js",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/lordferro/js.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/lordferro/js/issues"
  },
  "homepage": "https://github.com/lordferro/js#readme",
  "dependencies": {
    "gh-pages": "^5.0.0",
    "lodash.throttle": "^4.1.1",
    "parcel": "^2.8.3"
  }
}


***for one input***

// type full path.
import throttle from "../node_modules/lodash.throttle/index.js";

// we use const to avoid mistake in name (avoiding antipattern magic string and numbers)
const STORAGE_KEY = "nameOfKey";

const refs = {
  textarea: document.getElementById("textarea"),
  form: document.getElementById("form"),
};

refs.textarea.addEventListener(
  "input",
  throttle(onTextAreaInput, 1000)
);
refs.form.addEventListener(
  "submit",
  onFormSubmit
);

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();
  // since user submitted form we reset form
  evt.currentTarget.reset();
  // and clearing localStorage only exactly that key
  localStorage.removeItem("STORAGE_KEY");
}

function onTextAreaInput(evt) {
    // here use target instead currentTarget, otherwise throttle scream
  const message = evt.target.value;
    localStorage.setItem("STORAGE_KEY", message);
    
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(
    "STORAGE_KEY"
  );

  // we need to check if there is something, if user first time on this page there will be null
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}

***for multiple inputs ***
 <form id="form">
  <input type="text" id="name" name="name">
  <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
 <button type="submit">googo</button>
 </form>


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

refs.form.addEventListener('input', onFormInput)

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();
  // since user submitted form we reset form
  evt.currentTarget.reset();
  // and clearing localStorage only exactly that key
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(e) {
    
      // take formData and in this key put this value
    formData[e.target.name] = e.target.value;  
    
    const stringFormData = JSON.stringify(formData);
    console.log(stringFormData);
    localStorage.setItem(STORAGE_KEY, stringFormData)    
}

function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(
        STORAGE_KEY));   

  // we need to check if there is something, if user first time on this page there will be null
  if (savedMessage) {
    refs.name.value = savedMessage.name;
    refs.textarea.value = savedMessage.textarea;
  }
}



