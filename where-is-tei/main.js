const comeHereTei = document.querySelector(".comeHereTei");
const tei = document.querySelector(".tei");

comeHereTei.addEventListener("click", () => {
  tei.scrollIntoView({ behavior: "smooth", block: "center" });
});

tei.addEventListener("click", () => {
  scrollTo({ top: 0, behavior: "smooth" });
});
