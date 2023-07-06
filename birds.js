const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const image = document.querySelector(".about-img img"); // select the image element

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");

    // change the image source based on the button clicked
    if (id === "gray parrot") {
      image.src = "grey.jpg";
    } else if (id === "budgy") {
      image.src = "budgy.jpg"; // replace "budgy.jpg" with the actual path to the image
    } else if (id === "hummingbird") {
      image.src = "humm.jpg"; // replace "humm.jpg" with the actual path to the image
    }
  }
});