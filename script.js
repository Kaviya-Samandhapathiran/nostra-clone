//sign up close
var closemark = document.getElementById("close")
var signup = document.querySelector(".signup")

closemark.addEventListener("click", function(){
    signup.style.display = "none"
})

//New arrival
var newarrival = document.getElementById("newarrival")
var arrival = document.querySelector(".new-arrivals")

newarrival.addEventListener("click", function(){
    arrival.scrollIntoView({behavior: 'smooth'})
})

//most-want
var mostwant = document.getElementById("mostwant")
var wantpage = document.querySelector(".most-wanted")

mostwant.addEventListener("click", function(){
    wantpage.scrollIntoView({behavior: 'smooth'})
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
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const images = document.querySelectorAll('.prod');

function filterImages() {
  const selectedFilters = [];
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      selectedFilters.push(checkbox.id.replace('filter-', '')); 
    }
  });

  images.forEach(image => {
    const tags = image.querySelector('tags').textContent.split(',');
    let showImage = false;

    for (const filter of selectedFilters) {
      if (tags.includes(filter)) {
        showImage = true;
        break;
      }
    }

    if (selectedFilters.length === 0) {
      showImage = true; // Show all images if no filters are selected
    }

    image.style.display = showImage ? 'block' : 'none';
    image.style.width = showImage ? '30%' : 'none' ;
  });
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', filterImages);
});






