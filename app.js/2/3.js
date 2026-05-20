console.log("Hello, World!");
console.log("This is a simple Node.js application.");

let name="sanskar";

console.log(name);

let a=20;
let b=20;
let sum=a+b;

console.log("the sem is",sum) 
//basically apan jaise c me pritf use karte the na yaha per same wo kaam console.log() se hota hai



//templates leterals####**  
//easier way to print strings all along at once 
let pencil=20;

let eraser=10;
let total=pencil+eraser;
console.log("the total price will be ",total,"rupees");

//this is the old way of doing it

//we use `` and ${} to do it in a better way

console.log(`the total price will be ${total} rupees`); 

//line no 12
console.log(`the sem is ${sum}`); 
    ////here variable la dakhvayla we use ${} 


    //comparison operators

    let x =10;
    let y =20;
    console.log(y>x);
    //this will return true or false
    console.log(x<y);

    console.log(x==y); 
    console.log(x!=y);

    //IF STATEMENT else id statement

    let age = prompt("enter ur age")

    if(age>=18){

        console.log("you can vote");

    }
    else{
        console.log("you cannot vote");
    }
//prac quis

let color = prompt("enter color");
if(color=="red"){
    console.log("stop");
}
else if(color=="green"){
    console.log("go");
}
else (color=="yellow")
{

    console.log("wait");
}
    //make a sys calculating popcorm pricing based on its size **prac quis
      
    
  let size = xl;
  
 


 if (size==xl){
    console.log("price is 250 rs")
 }
  else if (size==l){
    console.log("price is 200 rs")
  }
  else if (size==M){
    console.log("price is 100 rs")
  }
  else {
    console.log("price is 50 rs")
  }
  //in nested if else we can put a if esle in in if statement
  let marks=45;
  if (marks>=33){
    if(marks>80){
        console.log("grade is O")
    }
    else {
        console.log("better luck next time")
    }
  } else{
    console.log("u are failed")

  }

  //indentify a good striing which havingg first letter as a and having size gretaer than 3 

  let str="apple";
  if((str[0]=="a")&& (str.length>3) ){
    console.log("string is a good string")
  }

  
let firstname= prompt("eneter your name")
console.log(firstname)

let firstname=prompt("eneter your first name")
let lastname=prompt("eneter ur last name")
console.log("hello" , firstname , "", lastname)
//kuch nahi sirf variabels me assign mya prompts for using it further in console easy babe!!

//string method
let str="sansakr"
console.log(str.trim());
//this will remove all spaces from the string and will return sanskar 
//concept ***  see in js all strings are immutable but still how trim method do it
//so trum method dont change thr current string it just makes a new string which dosesnt have any blank space


str.toUpperCase(); //convert given str into upper case
str.LowerCase(); //lower case me 

let str="ilovsomebody";
console.log(str.indexOf("love")) //1
str.indexOf("z") //-1 
str.indexOf("s") //4

method channing 
let str="  hello    ";
let newstr=str.trim().toUpperCase();
console.log(newstr);


slicng 
let str="iloveyou";
console.log(str.slice(1,5)); // is we want "love" so here its like 0 to n-1
console.log(str.slice(-num));
then it give length-num 
 

