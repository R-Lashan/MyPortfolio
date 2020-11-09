let _Text = document.querySelector(".text");
let _box = document.querySelector(".box");
let menu = document.getElementById('menu');
let position = 0;
var time = 1000;

setInterval(function () {
    if( _Text.innerHTML == "HTML"){
      _Text.innerHTML = "CSS";
      _Text.classList = "text blue";
      _box.classList.toggle("css-box");
    }
    else if(_Text.innerHTML == "CSS"){
      _Text.innerHTML = "JavaScript";
      _Text.classList = "text orange";
      _box.classList.toggle("js-box");
    } 
    else if (_Text.innerHTML == "JavaScript"){
      _Text.innerHTML = "HTML";
      _Text.classList = "text red";
      _box.classList.toggle("html-box");
    } 
}, time);


menu.addEventListener('mouseover', dropMenu)

menu.addEventListener('mouseover', function(){
  menu.classList.toggle('rotated-menu')
})
 
function dropMenu() {
 document.getElementById("myDropdown").classList.toggle("show");
}