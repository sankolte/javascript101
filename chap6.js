//functions is reusable blck f code which can be used for performing tasks firstly defineing func thwn we call it
function print1to5(){            //this is how we define func
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
print1to5();  //this is how we call func

//prac quis 1>>>>> func to print a poem

function poem(){
console.log("twinkle twnkle little star");


}
poem();

//func which will give a random number from 1 to 6 basicaly dice thrownn

function rollthedice(){
    let roll= Math.floor(((Math.random()*6)+1));
    console.log(roll);

}
rollthedice();
//mast

//with arguments

function add(a,b){
    return a+b;
}
add(a,b);  //here at calling we input values   
//here in passing arguments we have to be precise in inserting values like it should be in proper order
//nahi to error ayega js doesntt know which is age and which is name in followng eg
function personinfo(name,age){
       console.log(`${name} age is ${age}`);
}
personinfo("Sanskar",20);  

let a=prompt("eneter first num");
let b=prompt("enter second num");
function sum(a,b){
    console.log("The sum is", a+b);
}
sum(a,b);    //bann gaya calculator bc

//return keyword

//return is something which we get back from function but is cant be automatically printed on screen we have to use cosole.log for it

function addition(a,b){
    return a+b;

}
let s=addition(3,4);
console.log(s);      //console.log lihavch lagel 

//if sum of 3 nums then function calling will be like this 
// addition(addition(3,4),5);

function adult(age){
    if(age>18){
        return "adult";
    }
    else {
        return "minor";        //return keyword can return only single value so if more than one value we have to first use array or string then we can do it

    }
    
}
let ad=adult(14);
console.log(ad);
 


// prac quis 5 >>>>> return sum of 1 to n numbers
 function addd(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
      
    }
    return sum;
 } 
   let z =add(7);
console.log(z);  
//done

// prac quis 6 >>>>>>> func that returns the concatenation of all strings in an array

let str=["hello","this","is","amazing"];
function concate(str){
    let result=""
    for(let i=0;i<str.length;i++){
     result=result+str[i];       //this we know right

    }
    return result;
}
let y=concate(str);
console.log(y);


//SCOPE
//  1] global 2]fucntion 3] block  --- easy ones 

//LEXICAL SCOPE :- Child functions can access parent variables

function outer(){
    let a=10;
    function inner(){
        console.log(a);  //like this here inner func is child func but still it can access variable of outer func
       
        // let b=20;
    } 
    inner();
    // conosole.log(b);

}
outer();

//here i canr acceses any inner func variable in outer func variable its one way street
//in line 115 and 118 we declared varibale in inner and trying to acceses it in outer func but still it will be unaccesible

//to undersatnd/revice scope concept just watch prac quis 7

//--------------------------------------------------

//Function expresion ; basically its a approch of writing func
const sum=function(a,b){
    return a+b;
                              //here funis not perticularly named
}
let v=sum(2,3);
console.log(v);


//--------------------------------------------------------------------
//METHODS FOR OBJECTS
//they are basically fucntions which are defined in a object
const calculator={             //calculator is object while tya mdhe we make fucnti0ns nut wo bhi in forms of key values pair

    add:function(a,b){
        return a+b;
    },
    substract:function(a,b){
        return a-b
        },

        mul:function(a,b){
            return a*b;
        }
}

console.log(calculator.add(34,55));  //this is how we acceses it that method also and that operatiom also

//methods short hand 
const calculato={             //calculator is object while tya mdhe we make fucnti0ns nut wo bhi in forms of key values pair

    add(a,b){
        return a+b;
        },
    substract(a,b){
        return a-b
        },                         //basically we can skip writig function keyword

        mul(a,b){
        return a*b;
        }
}
console.log(calculator.add(34,55));
