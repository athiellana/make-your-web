/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".cars__modal"),
  modalBtns = document.querySelectorAll(".see"),
  modalClose = document.querySelectorAll(".cars__modal-close");
let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};
modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});
modalClose.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});
sr.reveal(
  `.banniere, .title__banniere, .text__banniere, .accroche1, .accroche2, .hr, .avisClient, .icon, .description`,
  { interval: 100 }
);
sr.reveal(`.ecology_block, .comment, .description__description`, {
  origin: "left",
});
sr.reveal(`.ecology_collage`, { origin: "right" });




 /*=============== UPDATING PRODUCT COUNT ===============*/
let cardsBody = document.querySelectorAll(".card__button-body");
let cartIcon = document.querySelector(".containerCart span");
cartIcon.classList.add("iconClass");
let count = 1;
cardsBody.forEach((cardBody) => {
  let btnSubmit = cardBody.children[1];
  btnSubmit.addEventListener("click", () => {
    cartIcon.innerHTML = count;
    count++;
  });
});



/*=============== REVIEW CLIENTS ===============*/
let noteIcons = document.querySelectorAll(".avisClient .form-horizontal .googleNote i");
let reviewForm = document.getElementById("form-horizontal");
let comments = document.querySelector(".comment");
let currName = document.getElementById("name");
let currMessage = document.getElementById("message");
noteIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("uil");
    icon.classList.toggle("uil-star");
    icon.classList.toggle("uis");
    icon.classList.toggle("uis-star");
  });
});
reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (currName.value !== "" && currMessage.value !== "") {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let currentTime = date + " " + time;
    comments.innerHTML += `
      <div class=user>
        <div class=profile>
          <div class=imageProfile id=${currName.value} style="background-image: url(../assets/images/profil-picture.jpg)"></div>
          <div class=infoProfile>
            <h4>${currName.value}</h4>
            <p>${currentTime}</p>
          </div>
        </div>
        <div class="message">
          <h4>${currMessage.value}</h4>
        </div>
    </div>`;
    currName.value = "";
    currMessage.value = "";
  }
});
