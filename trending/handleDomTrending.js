const imagesList = document.querySelector("#imagesList");
const handlDomTrending = (() => {
  return {
    trendingData: (data) => {
      charatersList.textContent = "";
      data.results.forEach((img, index) => {
        if (index % 2 == 0) {
          const list = document.createElement("li");
          const imgWrap = document.createElement("div");
          imgWrap.className = "img-wrap";

          const seriesImg = document.createElement("img");
          seriesImg.className = "charaters-img";
          seriesImg.setAttribute("src", `${img}`);

          imgWrap.appendChild(seriesImg);
          list.appendChild(imgWrap);

          imagesList.appendChild(list);
        }
      });
    },
  };
})();
