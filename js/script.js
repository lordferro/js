const divRef = document.querySelector('.div');
const itemRef = document.querySelector('item');

divRef.addEventListener('click', onClick);
let selectedTag = null;

function onClick(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
        return
    }

    const currentActiveBtn = document.querySelector('.item--active')

    // Тут на выбор две записи
    if (currentActiveBtn) {
      currentActiveBtn.classList.remove(
        "item--active"
      );
    }
    //  Этот IF можно заменить :
    // currentActiveBtn?.classList.remove('item--active');
    
        const nextActiveBtn = evt.target;
    nextActiveBtn.classList.add("item--active");
    selectedTag = nextActiveBtn.dataset.value;

    console.log(selectedTag);
} 