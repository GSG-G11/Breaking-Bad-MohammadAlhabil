const charatersList = document.querySelector(".charaters-list");
const detailsSection = document.querySelector("#detailsSection");
const closeDetails = document.querySelector("#closeDetails");
const chImg = document.querySelector("#chImg");
const chName = document.querySelector("#chName");
const chNickName = document.querySelector("#chNickName");
const chDate = document.querySelector("#chDate");
const chAppearance = document.querySelector("#chAppearance");
const chStatus = document.querySelector("#chStatus");
const chPortrayed = document.querySelector("#chPortrayed");
const copyLink = document.querySelector("#copyLink");
const shortLink = document.querySelector("#shortLink");

const handlDomCharacters = (() => {
  return {
    characterData: (data) => {
      data.forEach((character, index) => {
        const list = document.createElement("li");
        const imgWrap = document.createElement("div");
        imgWrap.className = "img-wrap";

        const charatersImg = document.createElement("img");
        charatersImg.className = "charaters-img";
        charatersImg.setAttribute("src", `${character.img || ""}`);

        const clrLinear = document.createElement("div");
        clrLinear.className = "clr-linear";

        const detailsIcon = document.createElement("div");
        detailsIcon.className = "details-icon";
        detailsIcon.setAttribute("data-index", index);
        detailsIcon.addEventListener("click", () =>
          handlDomCharacters.details(character)
        );

        const detailsImg = document.createElement("img");
        detailsImg.setAttribute("src", `../assets/eye.svg`);

        const name = document.createElement("p");
        name.className = "name";
        name.textContent = character.name;

        detailsIcon.appendChild(detailsImg);

        imgWrap.appendChild(charatersImg);
        imgWrap.appendChild(clrLinear);
        imgWrap.appendChild(detailsIcon);
        imgWrap.appendChild(name);
        list.appendChild(imgWrap);

        charatersList.appendChild(list);
      });
    },
    details: (data) => {
      detailsSection.style.display = "block";
      chImg.src = data.img;
      chName.textContent = data.name;
      chNickName.textContent = data.nickname;
      chDate.textContent = data.birthday;
      chAppearance.textContent = data.appearance;
      chStatus.textContent = data.status;
      chPortrayed.textContent = data.portrayed;
      chName.setAttribute("data-index", `${data.char_id}`);
    },
    getshortLink: (data) => {
      shortLink.textContent = data.result.short_link;
    },
  };
})();

const addEvent = (selector, event, cb) => {
  selector.addEventListener(event, cb);
};

addEvent(closeDetails, "click", () => (detailsSection.style.display = "none"));
addEvent(copyLink, "click", () => {
  const chId = chName.getAttribute("data-index");
  const url = `https://www.breakingbadapi.com/api/characters/${chId}`;
  const urlshort = `https://api.shrtco.de/v2/shorten?url=${url}`;
  fetchData("POST", urlshort, handlDomCharacters.getshortLink);
});