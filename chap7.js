 const student={
       
    name:"sanskar",
    age:18,
    engmarks:22,
    mathsmarks:32,
    scimarks:44,
    getavg(){
        let avg=engmarks+mathsmarks+scimarks/3;
        console.log(`the avg marks of sanskar is ${avg}`);

    }
 }   //output will be blank coz in object ke ander fucntion he and in js 
 //the function or methid in bject cant access the parameters inobject ya for that we have to use this keyword

 //we will write line 9 as 
  let avg=this.engmarks+this.mathsmarks+this.scimarks/3;  //mow its perfevt
//if we do this 
console.log(this);
//In a browser environment, window is the global object. It represents the browser window/tab, and it acts as the default context for code running in the global scope.
//window object is bydefault object jiska koi nahi uska wo 

// try and catch statements  



//used in API
//single error ke coz akkha website kharab hojati he like the part after that dont exicute right so iske liye we use try and catch

//for checking error we use try statmnet and after catching that error catch statemnt has backup code which will exicute if error has occured

try{
    console.log(a);    //try checks ka error ahe ka

}
catch{
    console.log("a");
}

try {
  let a = 10;
  let b = a + x; // x is not defined => throws an error
  console.log(b);
} catch (err) {
  console.log("An error occurred:", err.message);
}
//o/p An error occurred: x is not definedAn error occurred: x is not definedAn error occurred: x is not defined

//Arrow function
//Arrow functions in JavaScript are a shorter and cleaner way to write functions
const functionName = (parameters) => {
  // function body function define
  return result;              //IN FUNCTIONS RETURN IS USED TO GIVE OUTPUT
};   //syntax

const sum=(a,b) =>{
    return a+b;
}
console.log(sum(2,3));   //calling and passing values


const cube=(n)=>{
  return (n*n*n);
}
console.log(cube(2));

//implicit return >>>>>  basicaly when arrow func is used for only returnig a specific value we us it
//making arrow func more comapct by even removing that return keyword
//nut here curly braces ki jagah he closed brackets aajate he and with a semicolonn too


const multiply=(a,b)=> (
  a*b
);                             //no return keyword no curly braces
 console.log(multiply(2,3));


 // USNG SETIMEOUT for API

//it schedules a function to run after a specified delay (in milliseconds).
console.log("fornseeing delay we are writting this")
setTimeout(()=>{                                    //concept of IIFE
  console.log("hello sister ");

} ,4000);
console.log("aasehii"); //yeah this works

// TIME INTERVAL FUNC ; te ekk code repaet karel after a interval of time 

setInterval(()=>{
  console.log("hello");
}, 3000 );
//band kevha hoil when we will pass id 
//same code la

let id=setInterval(()=>{
  console.log("hello");
}, 3000 );
console.log(id);


//--------------------------------------------------------------------------------------------------------



//*** THIS FUNC WITH ARROW FUNC
 //Arrow functions do not have their own this.
//They inherit this from their surrounding (lexical) scope

const user = {
  name: "Sanskar",
  regular: function () {
    console.log("Regular:", this.name); // "Sanskar"
  },
  arrow: () => {
    console.log("Arrow:", this.name); // undefined (or window.name in browser)
  }                                       //whats happening here is in arroe func this refers to the scope of parents and for arrow func parent is user object which has a global scope and global scope is that window thing so thats why such output    
};                                    
                                                                                                                //^becoz arrow func ke pass apna this nahi hota wo uske parent ka this leta he 

user.regular(); // ✅ "Sanskar"
user.arrow();   // ❌ undefined
//this is a concept
 //this is basically a quantity which is used for calling right for that user object callig will be window coz scope global he amd for regular func calling will be that object USER



 //ekdum simple for  this in aarow func will be parenst scope sampla vishay is parent scope is global then window ayega if not then kuch aur ayega
 //it has ovio some diadv that we can accesess elemnts in object but has some adv too


 //-------------------------------------
 //prac quis
const square=(n)=>{
    return n*n;

  }                          //arrow func for squarng num
  console.log(square(2));

//func that prints hello world 5 times at 2 sec interval

setInterval(()=>{
  console.log("hello world");


}, 2000);   //this will print it at interval od 2 sec but we want only 5 times

  
let id = setInterval(()=>{
  console.log("hello world");


}, 2000);

setTimeout(()=>{          
  clearInterval(id)            //clearInterval() is a function used to stop an interval that was started using setInterval().
}, 10000);                     //we pass id of setinterval into that func 

  




