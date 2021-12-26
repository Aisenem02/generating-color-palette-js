const btn = document.querySelector(".btn");
const rc = () => Math.random() * (255 - 0) + 0;
const blocks = document.querySelectorAll('[class^="block"]');

function buttonClick() {
  blocks.forEach((element) => {
    element.style.background = `rgb(${rc()}, ${rc()}, ${rc()})`;
  });
}
btn.addEventListener("click", buttonClick);
