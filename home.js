let _Title = document.querySelector(".title");
let _Img = document.querySelector(".img");
let _Word = document.querySelector(".title2");
let _div = document.querySelector(".div");
let menu = document.getElementById('menu');

menu.addEventListener('mouseover', dropMenu)
menu.addEventListener('mouseover', function(){

    menu.classList.toggle('rotated-menu')
 })

function dropMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

_div.addEventListener('mousemove' , function(e) {
  let xAxis = (window.innerWidth / 5 - e.pageX) /15;
  let yAxis = (window.innerWidth / 5 - e.pageY) /15;
  _div.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

});

function colorText(){
  if(_Title.innerHTML == "Hello!"){
      _Title.innerHTML = "Hello!".fontcolor("black")  
      _div.classList.toggle('box')
    } else {
      _Title.innerHTML = "Hello!".fontcolor("white")  
      _div.classList.toggle('box2')
    }
} 