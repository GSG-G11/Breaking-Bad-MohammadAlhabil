const scrollToTopBtn = document.querySelector("#scrollToTopBtn");
const url = "https://www.breakingbadapi.com/api/characters";

//Scroll to top button
window.addEventListener("scroll", () => {
  let y = window.scrollY;
  if (y > 200) {
    scrollToTopBtn.classList.replace("hide", "show");
  } else {
    scrollToTopBtn.classList.replace("show", "hide");
  }
});

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const handl = handlDomCharacters;
fetchData("GET", url, handl.characterData);
