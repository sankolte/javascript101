 //js call stack its a kind of a datatype :  
function hello(){
    console.log("hii");
}



function demo(){
    hello();
    console.log("calliing hello function");
}
demo();
//calling demo function
//firstly demo func call hoyga and then uske under aa jayenge and then uske under to hello fucntion call hua he 

//ye sare call stack ke under store hoti he\
 //notes in notebook
 //all website has there own call stack 


 //---------------------------------------------------------------------------------------------------------
 //so basically i wil add breakpoint on very first exicuting line of code and then step by step we will go line by line by that arrow symbol and then we will see callstack which func is calling on which time
 //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


 //single threaded nature of js: ekk time pe code ki ekk hi cheez exicute hoyegi
 //exe
 // 
 //cutes one line of code at a time in a single sequence.

//try to understand the concept by forms wala eg suppose facebook pe login kiya and js me to at a time one thing right aise to no other tasks will be operate during this time

//callback are used 
//callback:they are such func which are paseed in other func 
//or settimeout func can be used
//concepts notes in noteboook
//jevha js shows such nature while working with settimer kind of props or other props this is called ASYNCHRONUS nature of js


//-----------------------------------------------------------------------------------------------------------------------------------

//javaScript is single-threaded — it runs one command at a time. If it were synchronous only, a slow task (like fetching from the internet) would block everything else. To prevent this, JavaScript uses asynchronous techniques to keep the browser responsive.

//but there are aslo prob which arrises because of this
//CALLBACK HELL 
//JavaScript is single-threaded — it runs one command at a time. If it were synchronous only, a slow task (like fetching from the internet) would block everything else. To prevent this, JavaScript uses asynchronous techniques to keep the browser responsive.

//callback : A callback is just a function passed as an argument to another function, which is called later, usually after some task is done.

//callback hell is excessive nesting of callbacks

//When you're working with asynchronous code in JavaScript (like reading files, fetching data, or waiting for user input), you often use callbacks 


doSomething(data, () => {
  doSomethingElse(data2, () => {
    doAnotherThing(data3, () => {
      // and so on...
    });
  });
});   //synatx of callback hell


let hed=document.querySelector(h1);

function changecolor(color,delay,nextcolorchange){   //ha tisra argument is a func 

    setTimeout(()=>{
        hed.style.color=color;
        if(havetochnagecolor){
            nextcolorchange();


        }

    },delay)
    
}

changecolor("red",1000,()=>{
    changecolor("yellow",1000,()=>{
        changecolor("pink",1000,()=>{
            changecolor("green",1000,()=>{           //this is callback hell :)
                changecolor("black",1000);
            });
        });
        
    });
    

});



function givename(name,nextname){
    setTimeout(()=>{
        console.log(name);
        nextname();                
    },1000);                                  
}

givename("sanskar",()=>{
    givename("vibha",()=>{
        givename("shubhangi",()=>{
            givename("jayaprada");

        });
    });
});
//will give this name exactly 1 sec after each so this is ow we design callbac hell 
//but these are pretty compelx so we got its option

//----------------------------------------------------------------------------------------------------
//promises 

// how promises can be used
//there are steps of using promises
//Step 1: Create a Function That Returns a Promise in following pattern


// function myAsyncTask() {
//   return new Promise((resolve, reject) => {
//     // do something
//     if (success) {
//       resolve("Success result");                          //jo ye sidha calling me pass karr rahe he na is the standard way to send results or errors from a Promise. errors mane failures
//     } else {
//       reject("Something went wrong");
//     }
//   });
// }

//step 2 : Call It Using .then() and .catch()

//_________________________________

function savetodatabase(data,succese,failure){
    let internetspeed=Math.floor(Math.random()*10+1);
    if(internetspeed>4){
   succese();

    }else
    {
       failure();
    }

}

savetodatabase("my name is sanskar",()=>{
    console.log("succese: ur data is succefully saved ", data);   //agar succseesful hoga to ho age ka data store hoga na
    savetodatabase("yeah",()=>{
        console.log("succese 2 like 2nd data stored");
        savetodatabase("haha",()=>{
            console.log("this is success 3");
        },()=>{
            console.log("this is failure ka statement");

        })

    }, ()=>{
        console.log("failure 2 weak connection");
    })

},()=>{
    console.log("failure: ur data is not stored");
});







////////////////////////////////////////////////////////////////
//step 1

function savetodatabase(data){
   return new Promise((resolve,reject)=>{
     let internetspeed=Math.floor(Math.random()*10+1);
    if(internetspeed>4){
   resolve("success");

    }else
    {
      reject("failure");
    }

   });
}

savetodatabase("my name is sanskar");
//op: will return a promise          //promise is also a object which contains elements like things like state and result of promise


//use of then() and catch();

//then(); used for agar promise fullfil hua to age kya kare
//catch();  used for agar promise reject hua

savetodatabase("my name is sanskar")   //here request will give us promise object
.then(()=>{
    console.log("promise was resolved");
}) //ethe semicolon nahi coz wo actually savetobase.then and savetobase.catch he and here wo continuous dono pe lagg raha he to bich me kuchnahi mangta

.catch(() => {
    console.log("promise was rejected");
});

//---------------------------------------------------------------------------------------------------------
//promise channing
//Promise chaining is when you link multiple .then() calls one after another so that each one runs after the previous one completes successfully.
//basically jer magcha data save zhala terch u will add new pile of data na just like we were used to do in callback hell

//taking same eg

savetodatabase("my name is sanskar")   //here request will give us promise object
.then(()=>{
    console.log("promise was resolved");
    return savetodatabase("2nd data save kara rhe")    //basically jo 2nd data la ghaycha ahe na tyala return ghya first then cha ys this is t syntax
})
.then(()=>{
   return savetodatabase("3rd data saved ");
})                                               //agar koi bhi error aye and wo reject ho jaye and and this() to niche jo catch he wo sab sambhal lega

.then(()=>{
    console.log("data is stored again");

})
.catch(() => {
    console.log("promise was rejected");
});

//basic synatx

doSomething()
  .then(result1 => {
    // Step 1 completed
    return doSomethingElse(result1);
  })
  .then(result2 => {
    // Step 2 completed
    return anotherThing(result2);
  })
  .then(result3 => {
    // Step 3 completed
    console.log("Final result:", result3);
  })
  .catch(error => {
    // If any error happens in any of the above steps
    console.log("Error occurred:", error);
  });


//----------------------------------------------------------------------------------------------------------------


//actual implementation of promises in callback hell 

//in that heading ka rang badloo wala code
    
let hed = document.querySelector("h1");

function changecolor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      hed.style.color = color;
      resolve(); // call next step after color is changed
    }, delay);
  });
}

changecolor("red", 1000)
  .then(()=>{
    return changecolor("yellow",1000);
  })
  .then(()=>{
    return changecolor("pink",1000);
  })
  .this(()=>{
    return changecolor("blue",1000);
  })
  .this(()=>{
    changecolor("black",1000);
  })

  //promise channing is used 

  //----------------------------------------------------------------------------------------------------------------