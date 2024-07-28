const galleryItems = document.querySelectorAll(".gallery-item");
const imageModal = document.querySelector("#imageModal");
const modalImage = document.querySelector("#modalImage");
// looping all image
galleryItems.forEach((element) => {
  // apply all event click at image gallery-item
  element.addEventListener("click", function () {
    console.log(this);
    modalImage.src = this.src;
    imageModal.style.display = "flex";
  });
});

imageModal.addEventListener("click", function () {
  imageModal.style.display = "none";
});

// slick
$(".slide-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
});
