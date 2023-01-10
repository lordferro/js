динамически отображать новый список

 <label>Looking for?   <input type="text" class="" id="filter"></label>
    <ul class="js-list"></ul>


    const tech = [
    { label: 'html'},
    { label: 'css'},
    { label: 'JavaScript'},
    { label: 'Node.js'},
    { label: 'React'},
    { label: 'Vue'},
    { label: 'Next.js'},
]

const refs = {
    list: document.querySelector(".js-list"),
    input: document.querySelector("#filter"),
}

refs.input.addEventListener(
  "input",
  _.debounce(onFIlterChange, 300)
);

// invoke function create markup
const lisItemsMarkup = createListItemsMarkup(tech);

// insert markup
populateList(lisItemsMarkup);

// function create markup
function createListItemsMarkup(items) {
    return items.map(item => `<li>${item.label}</li>`).join("");
}

// filter function
function onFIlterChange(evt) {
  console.log("INPUT");
    const valuesToFilter =
    evt.target.value.toLowerCase();

  // filtering, checking if typed symbols included in list items
  const filteredItems = tech.filter((t) =>
    t.label.toLowerCase().includes(valuesToFilter)
  );

  // invoke function create markup with filtered Items
  const lisItemsMarkup = createListItemsMarkup(
    filteredItems
  );

  // insert markup with filtered items, using innerHTML so we rewrite old markup 
  populateList(lisItemsMarkup);
}

function populateList(markup) {
    refs.list.innerHTML = markup;
}
