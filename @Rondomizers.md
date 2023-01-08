***Get 13 random hex and rgb array of objects***
function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}
const colors = [];


function hexToRgb() {
  const hex = getRandomColor();
  let result =
    /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
      hex
    );
  return result
    ? {
        hex: hex,
        rgb: `${parseInt(
          result[1],
          16
        )},${parseInt(result[2], 16)},${parseInt(
          result[3],
          16
        )}`,
      }
    : null;
}

for (let i = 0; i < 13; i++) {
  colors.push(hexToRgb());
  console.log(colors);
}

*** Get random RGB color ***
function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}

*** Get random HEX color ***
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
++++++++++++++++++++++++++
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    //Привести число к 16-й системе исчисления
    .toString(16) 
    .padStart(6, 0)}`;
}


