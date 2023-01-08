Выбрать одну кнопку, со второй булет сниматься. 
<div class="div">
      <button class="item" data-value="html">
        html
      </button>
      <button class="item" data-value="css">
        css
      </button>
    </div>


    

.item {
    width: 50px;
    height: 50px;
    background-color: yellowgreen;
    cursor: pointer;
    
}
.div{
    display: flex;
    gap: 10px;

outline: 1px solid tomato;
}

.item--active {
    background-color: blue;
}



const divRef = document.querySelector('.div');

divRef.addEventListener('click', onClick);

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
    const selectedTag = nextActiveBtn.dataset.value;

    console.log(selectedTag);
} 


++++++++++++++++++++++++++++
Выбрать несколько кнопок

const divRef = document.querySelector('.div');

divRef.addEventListener('click', onClick);
// Create new set to inhold selected tags
const selectedTag = new Set();

function onClick(evt) {
  const btn = evt.target;
// Check if we click onthe button? not on the parent DIV
    if (btn.nodeName !== 'BUTTON') {
        return
    }
    // Check if selectedTag contain tag
  const isActiveBtn = btn.classList.contains(
    "item--active"
  );
  if (isActiveBtn) {
    selectedTag.delete(btn.dataset.value);
  } else {
    selectedTag.add(btn.dataset.value);    
  } 
  btn.classList.toggle("item--active");
  console.log(selectedTag);
} 