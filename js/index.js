// cards are being loaded dynamically
const cardConteiner = document.getElementById("course-cards");
let card = "";
for (let i = 1; i <= 6; i++) {
  card += `<div class="card-body">
  <div class="card-img">
    <img src="images/course_${i}.png" alt="course-${i}" />
  </div>
  <div class="card-info">
    <p class="play-lessons">
      <img src="icons/play.svg" alt="" />
      <span class="text-gray">20 lessons</span>
    </p>
    <h3 class="card-title">Course - ${i}</h3>
    <p class="price-rating">
      <span>
        <span class="new-price">${Math.round(
          Math.random() * (300 - 200 + 1) + 200
        )} TK</span>
        <span class="old-price">${Math.round(
          Math.random() * (400 - 300 + 1) + 300
        )} TK</span>
      </span>
      <span>
        <img src="icons/star.svg" alt="" />
        <img src="icons/star.svg" alt="" />
        <img src="icons/star.svg" alt="" />
        <img src="icons/star.svg" alt="" />
        <img src="icons/star.svg" alt="" />
      </span>
      <!-- <span>Rating</span> -->
    </p>
    <div class="divider"></div>
    <div class="card-footer">
      <div class="card-footer-left">
        <span><img src="icons/user2.svg" alt="" /></span>
        <span>${Math.round(Math.random() * (300 - 50 + 1) + 50)} Students</span>
      </div>
      <button class="add-to-cart">
        <img src="icons/arrow.svg" alt="" />
      </button>
    </div>
  </div>
</div>`;
}
cardConteiner.innerHTML = card;

//  Subscribe section starts
const userForm = document.getElementById("subscribe-user");
const submitUser = document.getElementById("submit-user");

submitUser.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(userForm.email.value);
  userForm.reset();
});
