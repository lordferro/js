<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./styels.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>
<body>
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#subscription-modal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="subscription-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-subscribe>Save changes</button>
      </div>
    </div>
  </div>
</div>
  <script type="module" src="./js/index.js"></script>
</body>
</html>



// Вход на сайт, через время  - модалка - подпишитесь на нашу рассылку, закрываешь, через время опять, и так три раза и всё.
// установили пакет npm bootstrap.native что б использовать JS

import BSN from 'bootstrap.native';

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPS = 3;
let promptCounter = 0;
let hasSubscribed = false;
const refs = {
  modal: document.querySelector(
    "#subscription-modal"
  ),
  subscribeBtn: document.querySelector(
    "button[data-subscribe]"
  ),
};
// create modal from bootstrap
const modal = new BSN.Modal(
  "#subscription-modal"
);
// if we close modal first time, we call hide.bs.modal method, so listener look after that method, and start modal again
refs.modal.addEventListener(
  "hide.bs.modal",
  // call this function as callback
  openModal 
);
refs.subscribeBtn.addEventListener('click', onSubscribeClick)
// start modal from the begining
openModal();

function onSubscribeClick() {
  hasSubscribed = true; 
  modal.hide();
};

function openModal() {
  // counting show or if user already subscribe- stop showing
  if (promptCounter === MAX_PROMPT_ATTEMPS || hasSubscribed) {
    // this return avoid execution next code
    return;
  }
    setTimeout(() => {
      modal.show();
      promptCounter += 1;
    }, PROMPT_DELAY);
}

