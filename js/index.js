var toggleDrawer = () => {
  var drawer = document.querySelector('.drawer-content');
  drawer.classList.toggle('drawer-open')
}


// Testing dynamic card from javascript 

const test = document.getElementById('course-cards')
// test.classList.add('course-cards')

// const ul = document.createElement('ul')
// ul.innerHTML = '';
let card = '';
for(let i=1; i<= 6; i++){
  card += `<div class="card-body">
  <div class="card-img">
    <img src="images/course_${i}.png" alt="course-${i}" />
  </div>
  <div class="card-info">
    <p class="play-lessons">
      <img src="icons/play.svg" alt="" />
      <span class="text-gray">20 lessons</span>
    </p>
    <h3 class="card-title">ICT</h3>
    <p class="price-rating">
      <span>
        <span class="new-price">400TK</span>
        <span class="old-price">450TK</span>
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
        <span>412 Students</span>
      </div>
      <button class="card-action">
        <img src="icons/arrow.svg" alt="" />
      </button>
    </div>
  </div>
</div>`
}
// console.log(li)
console.log(test.innerHTML = card)