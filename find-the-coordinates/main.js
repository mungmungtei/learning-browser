// target 이미지 파일을 받은 후 JS 실행되도록 설정
window.addEventListener("load", () => {
  const horizontal = document.querySelector(".horizontal");
  const vertical = document.querySelector(".vertical");

  const target = document.querySelector(".target");
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  const coordinates = document.querySelector(".coordinates");

  function aim(event) {
    const x = event.clientX;
    const y = event.clientY;

    // 💩 요소 이동할 때 top, left를 이용 X
    // horizontal.style.top = `${y}px`;
    // vertical.style.left = `${x}px`;
    // target.style.top = `${y}px`;
    // target.style.left = `${x}px`;
    // coordinates.style.top = `${y}px`;
    // coordinates.style.left = `${x}px`;

    // ✨ translate()를 이용한 성능 개선
    horizontal.style.transform = `translateY(${y}px)`;
    vertical.style.transform = `translateX(${x}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;
    coordinates.style.transform = `translate(${x + 25}px, ${y + 15}px)`;
    coordinates.innerHTML = `${x}px, ${y}px`;
  }

  document.addEventListener("mousemove", aim);
});
