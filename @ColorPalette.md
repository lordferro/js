<!-- Создали разметку, дали цвета, выбираем один цвет, закращиваем фон. -->

 <div class="palette js-palette" style="display: flex; flex-wrap: wrap; gap: 10px;"></div>


.color-card.is-active {
    transform: perspective(400px) rotateX(10deg);
}




const colors = [
  {
    hex: "#a32778",
    rgb: "163,39,120",
  },
  {
    hex: "#ee9d0f",
    rgb: "238,157,15",
  },
  {
    hex: "#1965f5",
    rgb: "25,101,245",
  },
  {
    hex: "#dd0545",
    rgb: "221,5,69",
  },
  {
    hex: "#b43e53",
    rgb: "180,62,83",
  },
  {
    hex: "#8c8287",
    rgb: "140,130,135",
  },
  {
    hex: "#556d69",
    rgb: "85,109,105",
  },
  {
    hex: "#d2d9ab",
    rgb: "210,217,171",
  },
  {
    hex: "#17f47a",
    rgb: "23,244,122",
  },
  {
    hex: "#992922",
    rgb: "153,41,34",
  },
  {
    hex: "#90db3b",
    rgb: "144,219,59",
  },
  {
    hex: "#f0a03c",
    rgb: "240,160,60",
  },
  {
    hex: "#10edd9",
    rgb: "16,237,217",
  },
];

const paletteContainer = document.querySelector(".js-palette")
const cardMarkup = createColorCardsMarkup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardMarkup)

paletteContainer.addEventListener('click', onPaletteContainerClick);


function createColorCardsMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `<div class="color-card">
      <div
        class="color-swatch"
        data-hex="${hex}"
        data-rgb="${rgb}"
        style="background-color: ${hex}; width:100px; height:100px"
      ></div>
      <div class="color-meta">
        <p>HEX: ${hex}</p>
        <p>RGB: ${rgb}</p>
      </div></div>`;
    })
    .join("");
}

function onPaletteContainerClick(evt) {
  if (
    !evt.target.classList.contains("color-swatch")
  ) {
    return;
  }

  const swatchEl = evt.target;
  // Choose closest element with this selector .color-card, even if there will be nesting of 10 div's
  const parentColorCard = swatchEl.closest(
    ".color-card"
  );

  // if we have current active card, then we remove selector is-active
  removeActiveCardClass();

  // otherwise we add selector is-active
  addActiveCardClass(parentColorCard);

  setBgColor(swatchEl.dataset.hex);
}

function setBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
  // Select current active card
  const activeColorCard = document.querySelector(
    ".color-card.is-active"
  );
  // if we have current active card, then we remove selector is-active
  if (activeColorCard) {
    activeColorCard.classList.remove("is-active");
  }
}

function addActiveCardClass(card) {
  card.classList.add("is-active");
}