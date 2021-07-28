let menu = document.getElementById('menu');

menu.addEventListener('mouseover', dropMenu)
 
function dropMenu() {
 document.getElementById("myDropdown").classList.toggle("show");
}

menu.addEventListener('mouseover', function(){
    menu.classList.toggle('rotated-menu')
})