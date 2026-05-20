 let btn=document.querySelector('button');
 console.dir(btn);
 function getrandomcolor(){

let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  
  let color=`rgb(${red},${green},${blue})`
      return color;

    
 };

 btn.addEventListener("click",function(){
    let h1=document.querySelector('h1');
    let randomColor=getrandomcolor();
    h1.innerText=randomColor;
   let div=document.querySelector("div");
   console.dir(div);
   div.style.backgroundColor=getrandomcolor();



 })