const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const coordinates = document.querySelector(".coordinates");

function aim(event) {
  const x = event.clientX;
  const y = event.clientY;
  horizontal.style.top = `${y}px`;
  vertical.style.left = `${x}px`;
  target.style.top = `${y}px`;
  target.style.left = `${x}px`;
  coordinates.style.top = `${y}px`;
  coordinates.style.left = `${x}px`;
  coordinates.innerHTML = `${x}px, ${y}px`;
}

document.addEventListener("mousemove", aim);
