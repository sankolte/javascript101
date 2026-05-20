//chap 8 
//forEach method 

let arr=[1,2,3,4,5,6];
arr.forEach(function(element){                 //chill this is a justway of expresiing of writing a func like its namen is function without name

    console.log(element);

});    //op: 1 2 3 4 5 6


let arr2=[1,2,3,4,5,6];
arr2.forEach(function repeat(element){ 
    console.log(element);
});   //op: 1,2,3,4,5,6  same output just functon ka likhne ka tarika badla

//--------------------------------------------------------------------------------------------

//MAP function :map() is used to create a new array by applying a function to each element of the original array.
//it dont modify or do changes in orignal array

let arr3=[2,3,4,5,3,2,44,4];
let double=arr3.map((el)=>{       //here naya array jo banega uska naam double rakh diya 

    return el*el;
});
console.log(double);      //op   array of elements having doubled value

//-----------------------------------------------------------------------------------------------
//Every() function :Returns true if all items match a condition.

const arr = [2, 4, 6];
const allEven = arr.every(num => num % 2 === 0);
console.log(allEven); // true



//-----------------------------------------------------------------------------------

//filter func   ;; theory in handwritten notes 

let nums=[1,2,3,4,5,6,7,8,9,10,11,12,13];    //ii want a array having only even nums from following array
let ans=nums.filter((n)=>{
    return n%2==0;         //direct return madhech ti condition or ti filter lihycha
});
console.log(ans);


//-------------------------------------------------------------------------------------------------
//REDUCE func : reduce() is a function that helps you take all values in an array and combine them into one value.
//reduce() = turn a big array into one value.
// You decide what to do — add, multiply, merge, count, etc


let num=[1,2,3,4];
let finalval=num.reduce((res,el)=>{
    return res+el;
});         //we will create a new variable for the new final value u know it will be easy to print it 
 console.log(finalval);
 //o/p: 10    basically sum of all the num in the array

//quis : find max value from array by using reduce func


//normal methid

let arr=[11,23,55,33];
let max=0;
for(let element of arr){
    if(max<element){
        max=element;
        }
}
console.log(max);   //op 55

//now we will do it by reduce func


let arr=[11,23,55,33];
let maxval=arr.reduce((max,el)=>{
    if(el>max){
        return el;
    }
    else{
        return max;
    }
});
console.log(max);                      //chill just understand the logic


//prac quis  :check whether all the num in the array are the multiple of 10
//simple logic if num%10==0 then its mutiple of 10

let arr=[10,20,30,40,50];
let multiple= arr.every((num)=>{
    return num%10==0;              //every func me wo cond return me hi likhte he like filter func 

});
console.log(multiple);
//op true 


//__________________-------------------------------------
//default parameters/arguments

function sum(a,b=3){          //by default ekk value he in declaratipn itself 
    return a+b;
}                                // this completely depends on the order in which we will enetr the value while calling func 
                               //thats why hamesha default parameter b ko hi banao coz fir wo order mast rahega whe calling a func

console.log(sum(2));
//op 5

//-------------------------------------------------------------------------------------

//spread in js used in arrays/strings/objects basically aisa qunatity jinke ekk ekk elements ko jake hum access kar sakte he unn pe spread lagta he 


//its used to spread data of that quantity like for seeing purpose

let arr=[1,2,3,4,5,6,7,8,7,6,5,4,3,1];
console.log(...arr);   //sub elements indivisully print karke aye instead of printing that array

//used to make acopy of a array
let newarr=[...arr];
console.log(newarr);    //like this

//similaly with strings
let str="hello";
let chars=[..."hello"];
console.log(chars);
//copy banake kya to we do anything with that new array and there will no chamge n the orignal array
 

let even=[2,4,6,8,10];
let odd=[1,3,5,7,9,11];
let allnum=[...even,...odd];
console.log(allnum);
 

//for objects
const person = {
  name: "Sanskar",
  age: 20,
  isStudent: true,
  hobbies: ["coding", "gaming", "reading"],
}

const datacopy={...person,hobby:cricket};
//this is how copy to hoga hi but more property can be also added like this
console.log(datacopy2);


const datacopy2={...allnum,hobby:cricket};  //like this we can also add arr i objects

console.log(datacopy2);

//--------------------------------------------------------------------------------------------------------------

//REST ; The rest operator (...) collects multiple values into a single variable (usually an array).

 function sum(...args){   
    console.log(args);        //this will print that array formed always print that array in function

    
    
    //first line means:

// "I don't know how many values (arguments) someone will pass to the sum() function.
// Whatever they pass, collect all of them into an array called args."
    for(i=0;i<args.length;i++){
        console.log(`you gave us ${args[i]}`);

    }
 }
 sum(1,2,3,4,5,6,7,8,9);
 //op:
// you gave us 1
// you gave us 2
// you gave us 3
// you gave us 4
// you gave us 5
// you gave us 6
// you gave us 7
// you gave us 8
// you gave us 9

//js has a inbuilt array called as a arguments 
function add(){
    console.log(arguments);
}
add(1,2,3,45,4);
//op : [Arguments] { '0': 1, '1': 2, '2': 3, '3': 45, '4': 4 }
//like this its not an array but its like a collection of elemenats
//it dosent obey any array methid no array property as ia said its just a collectipn
// this argument dosent work on arrow func


//concept : this argument and rest do the same work but rest is anytime better than arguemnt speciall in modern js

function max(...args){
    return args.reduce((max,el)=>{

        if(max<el){
            return el;
        }
        else {
            return max;
        }
    })
}
console.log(max(23,44,66,77,44,6,88,99,234));
//just modified version of max wala progar
//here hum hamare mann se elemenst add karr sakte in array

//---------------------------------------------------------------------------------------------

//destructuring : Destructuring allows you to extract data from arrays or objects and assign them to variables easily.
//1. array
const arr = [10, 20, 30];

const [a, b, c] = arr;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

//order is very important in array destructuring



//2.objects cha destructuring

const student = {
  name: "Sanskar",
  age: 20,
  hobby:"cricket",
  grade:"outstanding",
};

//see we can do student.name to access the specific element
//but agar bohot sare elements ho object me and sub kko access karna he to it will get hecticj
