const urlImages = `https://imsea.herokuapp.com/api/1?q=breaking bad`;
const imagesOfSeries = document.querySelector("#imagesOfSeries");

const handlTrending = handlDomTrending;
addEvent(imagesOfSeries, "click", () => {
  imagesContentWrap.style.display = "block";
  bigContentWrap.style.display = "none";
  characters.children[0].classList.remove("active-item");
  imagesOfSeries.children[0].classList.add("active-item");
  fetchData("GET", urlImages, handlTrending.trendingData);
});
