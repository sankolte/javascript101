 //manipulating css html by using js
 //every elemrnt in html becomes a object in js 
 //The DOM is a tree-like structure that the browser creates when it loads an HTML page. Each element in the HTML (like <h1>, <p>, <div>, etc.) becomes a node in this tree.
//  The document object is a built-in object provided by the browser that represents the entire web page (the HTML document) loaded in the browser.
// change in document then there will be also change in html css
//we use console.dir for accessing prop of that document object 

//sidha query selectors its imp so basically ussse hi jyada ter se selct elemest
//tula je pan distey which is related to html like anuthing all can be accessed bu queryselctor

// console.dir(document.querySelector("h1"));           //order matters here if same namke 2 tag then pehele jo usko return karega queryselctor
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector("div a"));  //thoda nestng so here sirf vahi ancchors which are in div


// console.dir(document.querySelectorall("h1"));    //this will give me all thigs  
// //here we will get a nodelist


//-----------------------------------------------------------------------------------------------------------

// methods which actually manipulates elements in html cssconsole.dir(document.querySelector("p"));
// let para=document.querySelector("p");
// console.dir(para);
// console.log(para.innerText);     //whatever dikha raha ha like uper se dekhne pe 
// console.log(para.textContent);    //shows everything even we purposefully hide something it still displays
// console.log(para.innerHTML);     //shows full markup basicaaly html code

// //if i do
// let a=para.innerText="abc";
// console.log(a);
// //this ic called manipulatoion

// let b=para.innerHTML="Hi my name is <b>peter parker<b>";
// console.log(b);        //op : peter parker bold me agaya
// //ye hogaya  na html me manipulation
     
// let heading= querySelector("h1");
// console.log(heading);
 
// let c=heading.innerHTML="<ul>Spider man<ul>";


//---------------------------------------------------------------------------------------------------------
//attribute manipulation wo attributes of html css 
//getter and setters
//element.getAttribute("attributeName");
//firstly apan kontya tari html element la bolau by queryselector then we will get that all elemnt mag tyatla konta tari attribute la asa suppose id="something"
//img.getAttribute('id');   here element is img
//img.setAttribute('id','spiderman.jpg');   this is how we can also set 

//img.setAttribute('src','creation_1.png');
//here wo attribut ki value change hoti he basically bu using this


//--------------------------------------------------------------------------------------------
//manipulating styling
//mala tya box madhlya links che color yellow paheje wich are basically anchor tags\

// let links = document.querySelectorAll(".box a");   //tya box class madhle anchor tags pahejet

// for(let i=0;i<links.length;i++){            //afterall that links will give a collection so ovio we will use for

//     links[i].style.color="yellow";

//}

//---------------------------------------------------------------------------------------------
//classlist : kisi element ka class return karta he and ovio we can manipulate]
//after step 1 and 2


// let a = document.querySelector('.images');
// console.log(a.classList);            //will give u a 1 in return coz vah pe ekk hi classs he


// console.log(a.classList.add("abc"));  //now the element has 2 classes

// //so basocally jer css madhe ekhada class add kara jya madhe naya naya propeties taka and then wo class aise hi kisi html property ko manipulate karr sakte by adding that class


// console.log(a.classList.remove("abc"));  //will remove that class
//  console.log(a.classList.contains("abc"));//tells whether that elemenst haa such class or not
// console.log(a.classList.toggle('any class'));
// if the class is not present, it adds it.

// If the class is present, it removes it.

 //------------------------------------------------------------------------------------------------------------------
  //adding actual element like paragraph and headings in html by js

//   let newpara=document.createElement('p');
// newpara.innerText="HI my name is sanskar and i am not reaally feeling good ";
//   let body=document.querySelector('body');
//   body.appendChild(p);         append means tya selcted parent chya last madhe add hoil

// if  let box=document.querselector('box');
// box.appendchild(newpara);
// ata tya box chya last madhe ala para


//creating a button 

let newbutton=document.createElement('button');
newbutton.innerText="click me ";     
let d=document.querySelector('box');
d.appendChild(newbutton);

 //ye sab console pe ka he so just chill
 //if dont want this mess of child and parent
 d.append('this will be in the last of the box  ');
 //diff bet bith is this append accepts string and anything in genral but that appendchild acceptsonly nodes i.e html elemensts


 d.prepend("this adds in startinf and not in the end");
 d.removeChild('p');  // will remove child element 
 anything like anything.remove("kuch bhui like string or element kuch bhi remove karr akta bhai ");

//if chukun body.remove(); smapla vishay

//------------------------------------------------------------------------------------------------------------
