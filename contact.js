//Menu navbar
var menu = document.getElementById("menu")
var navbar = document.querySelector(".menuNavbar")
var closeBar = document.querySelector(".navclose")

menu.addEventListener("click", function(){
  navbar.style.display = "block"
})

closeBar.addEventListener("click",function(){
  navbar.style.display ="none"
})