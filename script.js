//sign up close
var closemark = document.getElementById("close")
var signup = document.querySelector(".signup")

closemark.addEventListener("click", function () {
  signup.style.display = "none"
})

//New arrival
var newarrival = document.getElementById("newarrival")
var arrival = document.querySelector(".new-arrivals")

newarrival.addEventListener("click", function () {
  arrival.scrollIntoView({ behavior: 'smooth' })
})

//most-want
var mostwant = document.getElementById("mostwant")
var wantpage = document.querySelector(".most-wanted")

mostwant.addEventListener("click", function () {
  wantpage.scrollIntoView({ behavior: 'smooth' })
})

//sliding images
var leftButton = document.querySelector('.left-button');
var slideImages = document.querySelector('.slide_images');
var rightButton = document.querySelector('.right-button')

leftButton.addEventListener('click', () => {
  slideImages.scrollLeft -= 100;
});

rightButton.addEventListener('click', () => {
  slideImages.scrollLeft += 100;
});


//checkbox image





