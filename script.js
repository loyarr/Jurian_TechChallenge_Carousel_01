const carousel = document.querySelector(".carousel");
const svgs = document.querySelectorAll(".svg");
const imgOne = carousel.querySelector("img");

let isDragging = false;
let prevX = 0;
let scrollLeft = 0;
const imgWidth = imgOne.clientWidth + 14;

svgs.forEach(svg => {
  svg.addEventListener("click", () => {
    if (svg.id === "left") {
      carousel.scrollLeft -= imgWidth;
    } else {
      carousel.scrollLeft += imgWidth;
    }
  });
});

carousel.addEventListener("mousedown", e => {
  isDragging = true;
  prevX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mousemove", e => {
  if (!isDragging) return;
  e.preventDefault();
  const newX = e.pageX - carousel.offsetLeft;
  const walk = (newX - prevX) * 2;
  carousel.scrollLeft = scrollLeft - walk;
});

carousel.addEventListener("mouseup", () => {
  isDragging = false;
});
