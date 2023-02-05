// fetch give us promise
fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => {
    // on answer of this promise do that
    return response.json();
    // if everything ok - show the object
  })
  .then((pokemon) => {
    console.log(pokemon);
  })
  .catch((error) => console.log(error));
