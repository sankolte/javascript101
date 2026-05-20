//object literals in js

//in js An object is a data type in JavaScript that is used to store multiple values together in a single variable.
// const student = {
//   name: "Sanskar",
//   age: 20,
//   college: "XYZ Institute"
// };  here student is a object in which used to store dif data like name and college etc
//An object literal is a simple way to create an object using curly braces {} and in key value pair
const student = {
  name: "Sanskar",
  age: 20,
  college: "XYZ Institute"
}  //pair like name:sanskar or age:20 ashya asta here

let student2=["sanskar",20,"xyz institute"];
//same data can be stored in array as well bur clarity will beless

const item={
    price:"aukat se jyada",
    color:["red","blue"], //yaat array pan store karu shakto

    discount:150
} 
 console.log(item.price); //this is how we print or access any element
 console.log(item.color);  //arry print hoanr



 //updating existing object    for eg line 10
  
// firstly acessses the elemnt which u have to edit by as always student.name aisa and then for updating it 
//student.name="dinesh"; and done uodated parat print kele object ter u will get ton see
 student.iq=100;
 console.log(student);  //we will add for (let row of arr) {
  for (let value of row) {
    console.log(value);
  }
// }new prop like this and then simply print the new object

 student.marks=["11","22","33"];
 console.log(student); //this is how we make array

//nested objects

const classinfo ={
    dany:{
        grade:"a",
        nature:"faltu",
    },
    dazy:{
              //like this just remember ki subobejcts chya madhat pan comma asto


    }

    }
    //nestedobjects are just like folders and subfolders

    //for accessing it
    console.log(classinfo.dany.grade);   //simple
    

    //array of object
    const cartoon=[

        {
            name:"doremon",
            genre:"baccho ka cartoon"
        },
        {
            name:"shinchan",
            genre:"bado ka cartoon"
        }
    ]

    console.log(cartoon[0]); //this is how we access array right
    console.log(cartoon[1].name); //will access a specific elemnt in a array
    cartoon[1].fanfollowing="very high"; //for updating a elemnt in aray
    console.log(cartoon);



    //maths object 
    //all mathematical methids are stored in maths object
     //math.random func is imp in which it is used to make random integers
     //notes me he in deep

     //random num between 1 to 100
     let num= Math.floor((Math.random()*100))+1;
     console.log(num);


     //random num between 1 to 5
     let num2= Math.floor((Math.random()*5))+1;
     console.log(num2);
     //simply multiply by 5 easy



     //assigmnet quis
     const car={
        
        name:LAMBO,
        model:Hurrican,
        color:black




     }
     console.log(car.name);  //to print the name of cars name
     






