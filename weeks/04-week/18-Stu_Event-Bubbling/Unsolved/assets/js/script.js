// TODO: Which element is the following line of code selecting?
// the query selector is picking out the div with the class "carouselbox"
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
// the "next" button on the carousel.
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/id/10/300/200",
  "https://picsum.photos/id/20/300/201",
  "https://picsum.photos/id/30/300/202",
  "https://picsum.photos/id/47/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// when you click on the image itself, it opens that image
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// when the user clicks on the 'next' button, the carousel moves to the next image.
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  // this prevents event bubbling
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// when the user clicks the 'previous' button, the carousel moves to the last image.
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
    // hitting the 'previous' button would open the previous image 
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
