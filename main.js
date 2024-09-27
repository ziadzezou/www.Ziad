const open = document.querySelector(".bars");
const xmark = document.querySelector(".bars i");
const drop = document.querySelector(".drop");

open.onclick = function () {
  drop.classList.toggle("open");

  const isopen = drop.classList.contains("open");
  xmark.classList = isopen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
