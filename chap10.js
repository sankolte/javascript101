 //dom events  : signals or notificatons that something has occured on web page
//clicking a button , submiting the form , taking any inputs in formmor anywere
//inline events  but its not efficient]]

//now diff imp event controlling prop we use to control this events
//1> onclick
let btn=document.querySelector("button");
console.dir(btn);

btn.onclick=function(){
    console.log("button was clicked");
                                              //prop1>> onclick

};


//we can also
let btn=document.querySelector("button");
console.dir(btn);
function hello(){
    console.log("hii");
    
}
btn.onclick=hello;                   //  but there's a difference between calling a function and passing a function as a value.
                                          //when u pass value u do in this way and hello();

//aso if there are too many buttons then hum for loops lagayenge and sub me onclick prop ;ageyegne

// onmouseeneter

function onmouse(){
    console.log("u have entered the range on that button or anythingg");

}
     btn.onmouseenter=onmouse;

//EASY cursor ko button ke uper lao

//we can only add a single property-value can be passed at a single time by these props

//------------------------------------------------------------------------------------
//event listeners
 //element.addEventListener("eventName", callbackFunction);
 //there that eventname annot write anything — the string in addEventListener("eventName", ...) must be a valid, predefined event name.
 //here multiple props can be set basically single object ke liye multiple multiple event controling methods 

let btn=document.querySelector("button");
console.dir(btn);
btn.addEventListener("click",hello); 
btn.addEventListener("click",onmouse);
//don at a  time
//therr are many events like "click" mdn

//-----------------------------------------------------------------------------------------
/home/sanskar/Desktop/javascipt/randomcolorgem.html
/home/sanskar/Desktop/javascipt/randomcolorgen.js
//#activity


//here that click event or any of these actions can be done on simple other tags also like paragarph etc aisa nahi he ki sirf button
let para=document.querySelector("p");
para.addEventListener("click", function(){
    console.log("this para is clicked ");

})  //like this 

let div = document.querySelector(".box");  //tya div la class dila named as a box
div.addEventListener("mouseenter", function(){
    console.log("mouse in the area of block ");

})   //for this we have to add some props in css but thik he u understood the concept

//---------------------------------------------------------------------------------------------------------------
//this in event listner
 //when we use this in call back of addeventlistner function it gives us that object that we are trying to handle 
 let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    console.log(this);   //this will give me sidha button as an object like console.dir me milta he na same
    this.style.backgroundColor = "red";   //so ovio hum use ched bhi sakrte he by doing tses thinsg
});   //why this.style... and not btn.style....
      //the browser automatically sets this to the element that the event happened on.
      //mhanje "this" can be directly reffered to the actual element
      //even i can do this.innertext vagire]

      //why to use
      let buttons = document.querySelectorAll(".delete");

for (let btn of buttons) {
    btn.addEventListener("click", function () {
        console.log(this); // Which button was clicked?
        this.parentElement.remove(); // Remove that specific task
    });
}

//Multiple similar buttons	Know which one was clicked
 

//------------------------------------------------------------------------------------------------------------------------------
//keyboard events

let btn=document.querySelector("button");
btn.addEventListener("click", function(event){
    consol.log(event);
})
//event argument is th default argument : it gives all the info and properties abot the current event
//ata here it will give all the info about click coz here its the event\

//imp keyboard events
//keydown	When any key is pressed down	Games, shortcuts, form handling, real-time typing	Most commonly used event
//keyup 	When any key is released	Final input validation, key combinations	Use with keydown for full control
//keypress	When a key that produces a character is pressed	Simple typing input (text fields)	❌ Deprecated — avoid using in modern code

//notes in notebook

//--------------------------------------------------------------------------------------------------

//form events

{/* <form action=" /action">
<input placeholder="Enter ur email">
<button>Register</button>

</form> */}               //ye apna html



let form=document.querySelector('form');
form.addEventListener("submit", function(){
    console.log("ur form has submited");

})
//what happens is wo sidha redirect hotahe on page named as acton like uss url pe what if we dont want that and we want ki uss hi page pe rahe 
//we got a property of event for this

//event.preventdefault;

let form2=document.querySelector('form');
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("ur form has submited");

})
//usi page pe rahenege 

//---------------------------------------------------------------------------------------------------
//extracting data of that form after we submit it 
//how to work on the data
let form3=document.querySelector('form');
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("ur form has submited");


    let inp=document.queryselector("input");
    console.dir(inp);

        //there is special property iin forms called as a value property which stores all the text written in that form
  
        console.log(inp.value);



})

//one convinient way to access any element in the html file otherthan queryselector 
//in only forms
//firstly document.queryselector(form) and then console.dir(form)
//there is a prop of called element which returns all the elemenst in the html code
//let form=document.querysekctor(form);
//form.element
//form.element[0];
//indivisulas elemenst ko access kar sakte

//------------------------------------------------------------------------------------------------------------------
