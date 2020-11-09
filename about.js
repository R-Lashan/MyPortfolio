 let _para = document.querySelector(".paragraph");
 let menu = document.getElementById('menu');
//  let _para2 = document.querySelector(".age");
 const number = 2008;
 
 
 function Age(){
   const age = new Date();
   let years = age.getFullYear()
   let nums = years - number
     
document.querySelector(".age").innerHTML = nums;
 
 }
 
 setInterval("Age()",100)

 menu.addEventListener('mouseover', dropMenu)

 
 function dropMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}


menu.addEventListener('mouseover', function(){
  menu.classList.toggle('rotated-menu')
})

//  _para.addEventListener('mouseover', colorText);

//  function colorText(){

//     if(_para.innerHTML==`Lorem ipsum  sit amet consectetur, adipisicing elit. Quasi amet tempore aliquid repellendus nobis itaque ullam cum ducimus? Itaque, porro accusantium molestiae vero magnam fuga incidunt. Saepe eos sapiente perferendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus est recusandae, tempore unde dicta non accusamus incidunt aspernatur saepe iure sapiente sunt perspiciatis eaque. Ipsum blanditiis laborum velit corporis expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab soluta minima quisquam, debitis nostrum ipsam quidem eum minus pariatur consequatur iusto beatae ipsum laborum exercitationem iste fuga! Temporibus, sequi.`){
//         _para.innerHTML = `and  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi amet tempore aliquid repellendus nobis itaque ullam cum ducimus? Itaque, porro accusantium molestiae vero magnam fuga incidunt. Saepe eos sapiente perferendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus est recusandae, tempore unde dicta non accusamus incidunt aspernatur saepe iure sapiente sunt perspiciatis eaque. Ipsum blanditiis laborum velit corporis expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab soluta minima quisquam, debitis nostrum ipsam quidem eum minus pariatur consequatur iusto beatae ipsum laborum exercitationem iste fuga! Temporibus, sequi.`;
//    }  else {
//      _para.innerHTML = `Lorem ipsum 12 sit amet consectetur, adipisicing elit. Quasi amet tempore aliquid repellendus nobis itaque ullam cum ducimus? Itaque, porro accusantium molestiae vero magnam fuga incidunt. Saepe eos sapiente perferendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus est recusandae, tempore unde dicta non accusamus incidunt aspernatur saepe iure sapiente sunt perspiciatis eaque. Ipsum blanditiis laborum velit corporis expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab soluta minima quisquam, debitis nostrum ipsam quidem eum minus pariatur consequatur iusto beatae ipsum laborum exercitationem iste fuga! Temporibus, sequi.`;
//    }
// }