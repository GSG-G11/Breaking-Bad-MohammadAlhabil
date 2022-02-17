const url = "https://www.breakingbadapi.com/api/characters";
const characters = document.querySelector("#characters");
const bigContentWrap = document.querySelector(".big-content-wrap");
const imagesContentWrap = document.querySelector(".images-content-wrap ");

// Get Characters Data
const handl = handlDomCharacters;
const loadPage = () => {
  imagesContentWrap.style.display = "none";
  bigContentWrap.style.display = "block";
  fetchData("GET", url, handl.characterData);
};
addEvent(window, "load", loadPage);

addEvent(characters, "click", () => {
  imagesContentWrap.style.display = "none";
  bigContentWrap.style.display = "block";
  characters.children[0].classList.add("active-item");
  imagesOfSeries.children[0].classList.remove("active-item");
  fetchData("GET", url, handl.characterData);
});

// Light and dark mode
const themeSwitcher = document.querySelector("#them-input");
const switchTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let switchToTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", switchToTheme);
};
addEvent(themeSwitcher, "click", switchTheme);

//Scroll to top button
const scrollToTopBtn = document.querySelector("#scrollToTopBtn");
const displayScrollToBtn = () => {
  let y = bigContentWrap.scrollTop;
  if (y > 200) scrollToTopBtn.classList.replace("hide", "show");
  else scrollToTopBtn.classList.replace("show", "hide");
};
addEvent(bigContentWrap, "scroll", displayScrollToBtn);

const scrollToTop = () => {
  bigContentWrap.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
addEvent(scrollToTopBtn, "click", scrollToTop);

//Display Menu on Mobile View
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const closeNav = document.querySelector(".close-nav");
const displayNav = () =>
  (nav.style.display = nav.style.display === "none" ? "block" : "none");
addEvent(menu, "click", displayNav);

const closeNavBar = () => (av.style.display = "none");
addEvent(closeNav, "click", closeNavBar);

//Search For Character
const searchInput = document.querySelector("#search-input");
addEvent(searchInput, "keypress", (e) => {
  if (e.key === "Enter") {
    console.log(searchInput.value);
    const urlCharacter = `https://www.breakingbadapi.com/api/characters?name=${searchInput.value}`;
    fetchData("GET", urlCharacter, handl.characterData);
  }
});

//Sort The Characters
const sortItem = Array.from(document.querySelectorAll(".sort-item label"));
let sortedCharacter;
const sortSwitch = (e) => {
  const sortInput = e.target.getAttribute("for");
  switch (sortInput) {
    case "none":
      fetchData("GET", url, handl.characterData);
      break;
    case "A_Z":
      sortedCharacter = [...listOfCharacter].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      handl.characterData(sortedCharacter);
      break;
    case "Z_A":
      handl.characterData(sortedCharacter.reverse());
      break;
    default:
      break;
  }
};
for (const item of sortItem) {
  addEvent(item, "click", sortSwitch);
}
