function sliderReview() {
  return `<section class="image-slideshow">
      <img class="slide-img" src="../Images/first-review.png" alt="" />
      <img class="slide-img" src="../Images/second-review.png" alt="" />
      <img class="slide-img" src="../Images/third-review.png" alt="" />
    </section>`;
}

function sliderFunctionality() {
  //image slider
  var idx = 0;
  imageshow();
  function imageshow() {
    let slide = document.getElementsByClassName("slide-img");
    for (var i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
    }
    idx++;
    if (idx > slide.length) {
      idx = 1;
    }
    slide[idx - 1].style.display = "block";
    setTimeout(imageshow, 2000);
  }
}

export { sliderReview, sliderFunctionality };
