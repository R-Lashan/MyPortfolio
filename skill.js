let menu = document.getElementById('menu');

menu.addEventListener('mouseover', dropMenu)
menu.addEventListener('mouseover', function(){
  menu.classList.toggle('rotated-menu')
})
 
function dropMenu() {
 document.getElementById("myDropdown").classList.toggle("show");
}