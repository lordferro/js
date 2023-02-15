window.onscroll = function (ev) {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight
  ) {
    alert("bottom of the page reached");
  }
};
