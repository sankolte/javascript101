for(let i=1;i<=10;i++){
    console.log(i);
}
//this is how it works

for(let i=10;i>=1;i--){
    console.log(i);
}

//prac quis ..print all odd nums form 1 to 15

let i=1;
for(i=1;i<=15;i++){
    if(i%2==1){
        console.log(i);
    }
}//simply here logic kay...if the num is odd then its modulo by 2 is always 1
//one more logic here
//all odd num has diff of 2 for(i=1;i<=15;i=i+2) console.log(i)
//CONCEPT OF INFINITE LOO.........basicaally agar condition di nahi he to oviously bina cnditionn ka loop chalte hi jayega
//in some cases
//for(i=1;i<=5;i--); ata here -1 -2 -3 -4 -5 -6 this will continue in such a way to infintiy


//prac quis ....multiplication table of 5 
for(i=5;i<=50;i=i+5){
    console.log(i);
}  //easy as fuck


//what if i want to use prompt

let n=prompt("enetr a number")
n=parseint(n)                 //IF U WANT TABLE OF ANY NUMBER 

//ok so whenevr prompt is taken and stored ini any variable it takes the input as a string and not as a integer so to convert
// that into int u have to basically use pasrseint func which do the work 

for(i=n;i<=n*10;i=i+n){
    console.log(i);

} 

//NESTED LOOPS .... MAJORLY COVERED IN HANDWRITTEN NOTES


//while loops  
let a=1; 
while(a<=5){
    console.log(a);
    i++;
}

//favorite movie game using while loop user has to guess fav movie until he gives a coreect ans and he can quite
// user se input hum prompt se lenge we have to put in loop

let fav="dune";
let guess=prompt("enter the name of the movie ; ");
while((fav=!guess)&&(guess=!"quite")){  //jevha parynt equal yet nahi 
console.log("nope ur wrong!!");
guess=prompt("eneter the name of the movie");
    
}
if(fav==guess){
    console.log("you won");
}

//loop with arrays  ..for accesing each and evey single elemnt of the array by default we use loops
let fruits=["mango","apple","lici","berries","oranage"];
for(let i=0;i<fruits.length;i++){

    console.log(i,fruits[i]);    //this is how we could right 1 then name of element 
                                 //we also used indexing ye wala format learn hi karlo for accesing arrays ke memnbers 
                
}

let arr = [10, 20, 30];
for (let num of arr) {
  console.log(num);              //new and more simpler way to access elemnts of array b using for of 
}
 
//multiplivation table 1 to 10 by using nested loops
for(let i=0;i<11;i++){

    for(let j=0;j<11;j++){
        console.log(`${i} * ${j} =${i*j}`) //main logic he ahe baki sagda chutyapana
        
    }
    console.log("--------------")
}


//this was for sing loop u know the format now u also know how to access array with using loop te titka path karun ghe it will help

//now 2d array and loop ki backchidi
 let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < arr.length; i++) {           // outer loop for rows
  for (let j = 0; j < arr[i].length; j++) {      // inner loop for columns
    console.log(`Element at arr[${i}][${j}] = ${arr[i][j]}`);
  }
}
//same syntax everywhere like jaise 1d array me humne wo format sor syntax learn kiya waise hi yaha pe ye synatx dekho
//firstly i<arr.length jo ayegi 0 1 2 which will give us rows and then ekk aur loop banakr usme j and which j<arr[i].length


//for of loop
let str="sanskar";
for(char of str){
    console.log(str);
} //op is 7 times sanskar likha hua
//why basically here each and every char of str comes on place pf char and then it got print its like dynamic memory alcocation 
