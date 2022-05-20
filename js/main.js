const btnOnMenu = document.querySelector(".header-nav-menu");
const btnCloseMenu = document.querySelector(".mobile-header-close");
const resMenu = document.querySelector(".header_nav_mobile")
btnOnMenu.onclick = function(){
    resMenu.classList.toggle("none")
    
}

btnCloseMenu.onclick = function(){
    resMenu.classList.toggle("none")
}

  $( function() {
    $( "#accordion" ).accordion();
  } );