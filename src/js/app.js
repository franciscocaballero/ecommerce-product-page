// Varbibles

const closeIcon = document.querySelectorAll(".close-icon");
const modal = document.querySelectorAll(".modal");
const productImage = document.querySelectorAll(".product-img-main");

const arrow = document.querySelectorAll(".arrow");
console.log(arrow);

//Event listeners:
closeIcon.forEach((e) => {
  e.addEventListener("click", function () {
    modal[0].classList.toggle("hidden");
  });
});

productImage.forEach((e) => {
  e.addEventListener("click", function () {
    modal[0].classList.toggle("hidden");
  });
});

arrow.forEach((e) => {
  e.addEventListener("click", () => {});
});
