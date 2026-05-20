//firstly user enters a max number and then tries to guess a random number genrated between  to that max number


let max= prompt("enter max number");


let random= Math.floor((Math.random()*max))+1;
console.log(random);
   let guess=prompt("guess the number");

while((guess!=random)&&(guess!="quiet")){
  guess=prompt("eneter ur guess again");       //here we have to again prompt coz loop chalne ke baad firse guess kaisa karega
 if(guess==random){
    console.log("u guessed it right");
 }
 else if(guess=="quiet"){
    console.log("you quite the game");
 }

 else{
    console.log("try again");
 }
}