const cards = document.getElementsByClassName("add-to-cart");
const cardItems = [];

function saveCartInLocalStorage() {
  //   console.dir(localStorage)
  localStorage.setItem("cart", JSON.stringify(cardItems));
  //   console.log(JSON.parse(localStorage.getItem('cart')));
}

function addToCard(e) {
  // getting the course title
  const courseTitle =
    e.target.parentNode.parentNode.parentNode.getElementsByClassName(
      "card-title"
    )[0].textContent;
  // getting the course image url
  const courseUrl = e.target.parentNode.parentNode.parentNode.parentNode
    .getElementsByClassName("card-img")[0]
    .children[0].getAttribute("src");

  // getting the course price
  const coursePrice =
    e.target.parentNode.parentNode.parentNode.getElementsByClassName(
      "new-price"
    )[0].textContent;
  const princeToInteger = parseInt(coursePrice.split(" ")[0]);

  let cardItem = {
    courseTitle: courseTitle,
    coursePrice: princeToInteger,
    qty: 1,
    imgUrl: courseUrl,
  };
  let isExist = false;

  if (cardItems.length > 0) {
    for (let item of cardItems) {
      if (item.courseTitle === courseTitle) {
        isExist = true;
      }
    }
    !isExist ? cardItems.push(cardItem) : alert("This item is already exist!");
  } else {
    cardItems.push(cardItem);
  }

  saveCartInLocalStorage();
}

for (let card of cards) {
  // console.log(card)
  card.addEventListener("click", addToCard);
}
