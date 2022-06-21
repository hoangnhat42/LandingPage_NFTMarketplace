//Get elements from the DOM
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

//Toggle open/close menu


menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open'); 
}); 


//Popup login
function togglePopup() {
    document.getElementById("popup-1")
     .classList.toggle("active");
   }