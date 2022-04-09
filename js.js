const burger = document.querySelector(".burger");
const bars = document.querySelector(".fa-bars");
const xMark = document.querySelector(".fa-xmark");
const ulList = document.querySelector("ul");

const show = () => {
  ulList.classList.toggle("active");
  bars.classList.toggle("hide");
  xMark.classList.toggle("hide");
};

burger.addEventListener("click", show);
