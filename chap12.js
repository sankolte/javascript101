  //Async functions  : making code compact and used when we are working with async nature of js
  //using async and await keywords

//all async func returns a promise which happens by default

async function greet(){
    return hello;
}
greet() //this will return a promise 
//result of that promise is hello
//genrally that promise is always fullfilled but if there is any error in the code then automatically promise will be will be in rejected state

//An async function is a special kind of function that automatically returns a Promise, and allows you to use the await keyword inside it.


//so basically its a more simple option for this channing\


.this(()=>{
    console.log("promise was resolved");
})
.catch(()=>{
    console.log("promise was rejected because of some error");
})


//Await function
// was this does is it pauses the exixution of the async function until the promise is settled like either resolved either rejected

 function getnum(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();

        },1000)
    });
 }
 async function demo(){
    await getnum();
    await getnum();
    await getnum();
    await getnum();
          getnum();
 }
 /////////////////////

 //asunc fucn in deep
 //see fakeapi func returns a promise and when await is used then there is conditin ki exicution nahi hoga jab tak wo rpomise of fakeapi is resolved but what about the promise returned by the async func uska hota kya he and what do we with that promise
 //and in text editor 
 //-----------------------------------------------------------------------------------------------------------
 //yaha pe her barr ur promise is resolving but what if it rejects like how can we handle rejections

 function getnum(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();

        },1000)
    });
 }
 async function demo(){
    await getnum();
    await getnum();
    await getnum();
    await getnum();
          getnum();
 }

// suppose itha jer konta tari promise reject zhala and suppose we also have some work age of this async func to wo to hoga hi nahi to then age ke kaammm ka kya ???

//try and catch  

//jo block of code me error aa sakta he wo jayega try me and catch me error ane ke baad kya show karn ahe }
 function getnum(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();

        },1000)
    });
 }
 async function demo(){
    try{
        await getnum();
        await getnum();
        await getnum();
        await getnum();
        getnum();
    } catch(err){
        console.log("error caught");      //like this

    }
 }  
 //--------------------------------------------------------------------------------------------------------------------------------

 //API: Application programming interface An API lets your JavaScript code talk to other programs or services (like a server, a database, or a third-party app like weather, news, etc.).
//waiter analogy
//server is kitchen api is waiter 
//firsly we request api (waiter) to bring me samosa (data) then it goes iin the kitchen (server ) there he gives a req to server and then he just brings that data roopi samosa to y
//here we are mostly using web api i.e api which works with http
//where api is a url (uniform resource locator)  basically a address to locate the resource on internet
//api is also a url But instead of showing you a webpage, it usually gives back raw data, usually in JSON format.


//there are many api 
//https://catfact.ninja/fact this url returns api which requests the facts about cats
//www.boredapi.com/api/activity   this url returns the api which req to give any activitu

//JavaScript uses APIs to fetch, send, or manipulate data on the web — without reloading the page.

//json : basically its a data format                  
//It's a format to store and exchange data — just like an object in JavaScript.
//When you call an API using JavaScript, it often returns JSON data.

// its not same of object but still it has props stored in key value pair

// o/p of catfact wala api :{"fact":"Sir Isaac Newton is credited with creating the concept for the pet door that many cats use today to travel outdoors.","length":116}

let jsondata={"fact":"Sir Isaac Newton is credited with creating the concept for the pet door that many cats use today to travel outdoors.","length":116}
//we know the data is in form of string but if we want to convert it into objet
let a=JSON.parse(jsondata);
console.log(a);
//now this will give me a js object
//agar opposite karna hua to
let b=JSON.stringify(a);
//this will give me a string 


//----------------------------------------------------------------------------------------------------------------
//tetsing API tool     1.postman   2.hoppscoth

//---------------------------------------------------------------------------------------------------------

//AJAX : asunchronous js and XML 
//its a whole process where we call api and response me data ata he 
//ye pura process asunchronous hota he where pehele jamane me response wan not in json it was in xml it was also a markup lang

// Asynchronous means not happening at the same time.

// In programming, it means code doesn’t wait for one task to finish before moving to the next one.

// Instead, it starts the task, then moves on, and comes back later when that task is done

//---------------------------------------------------------------------------------------------------------
//HTTP verbs  HyperText Transfer Protocol It is the protocol (set of rules) used by browsers and servers to communicate with each other over the internet.
// get post put etc.......
// get:  when we have to take some info like take then we use it 


//----------------------------------------------------------------
//status codes
//200 : all good 
//404 : not found 
//400 : bad request               
//500 : internal server error

//---------------------------------------------------------------------------------------------------
//Adding info in url
//basically api chya url madhe extra info add kasa karycha
//slash ke baad quis mark and thenn uske baad i can write some key value pairs 
//  basically ankhi thoda precise ani exact data fetch karnya sathi

// ?q=harry+potter    here q is key and harry+potter is a value
//these are called query strings

// https://api.potterdb.com/      this is api having access to all of the harry potter database

// https://api.potterdb.com/v1/characters   this will give me all the info about charrecters in harry [otter 
//this will return all the char ovio in key value pair 
//ata jer tyatla ekhada specific char acces karycha asla ter like harry potter 

//variabls in api :  its bascially a placeholder in the url which is replaced by the values or query strings when we are making request

//-----------------------------------------------------------------------------------------------------------------------------------------
//headers in http : they basically Headers are key-value pairs sent along with every HTTP request or response.
//-----------------------------------------------------------------------------------

// MY FIRSTT API
// fetch(url)
let url="https://catfact.ninja/fact";
fetch(url);
//inspect>netwoks>fact> tithe disnar response
//this fetch func also returns a promise in the form of resonse

//is its returinig promise then we can use then and catch 

// extra picheka concept : whenever i use that argument or that thing thwn it will return the result of the promise but if i did not pass anything it will dont give me result it will just carry out thr code written inside the then() if the promise is resolved
fetch(url)
  .then((response) => {
    console.log(response); // This logs the result (Response object) from the promise
  });

  //aisa
//lets continue
let url="https://catfact.ninja/fact";
fetch(url)
.then((response)=>{
    console.log(response);
    //data hoil return pan tyala vachta nahi yenar for that we use a func
    response.json()
  //isse again ekk aur promise return hoga which will give readable data if we do console.log(response.json());
    .then((data)=>{
        console.log(data);

            //this wil give me proper json data

    })
})
.catch((error)=>{
    console.log(error);                     //ya agar koi response ya result nahi aya promise se to this will return error kya aya tha


})
   
//same cheez promise channng se karte

let url="https://catfact.ninja/fact";
fetch(url)
.then((response)=>{                                          //response boll lo ya result boll lo dono ekk hi he
console.log(response);
return response.json();

})
.then((data)=>{
    console.log(data.fact);                      //.fact se wo data ka sirf main oart matlab wo fact ata he return boke


})
.catch((err)=>{
    console.log(err);

})
//ye hua sirf agar ekk data hua to what if meko aur responses chahiye
let url="https://catfact.ninja/fact";
fetch(url)
then((response)=>{                                          //response boll lo ya result boll lo dono ekk hi he
console.log(response);
return response.json();

})
.then((data)=>{
    console.log("data_1 :",data.fact);       
    
    return fetch(url);                                     //firse fetch karna padega tab hi naya data dega

})
    .this((res)=>{
        return res.json();

    })

    .then((data2)=>{
        console.log("data_2 : ",data2);

    })


.catch((err)=>{
    console.log(err);

})

//------------------------------------------------------------------------------------------------------------------------------------------

//using ASYNC and AWAIT in here

let url="https://catfact.ninja/fact";

async function getfacts(){
    try{
    let res=await fetch(url);            //here fetch returns a promise right so await bass batata he ki jab tak wo promise resolve nahi hota tab tak dont store it into res or basically kuch bhi mat karo 
                                        // agar use nahi kiya await ka to firr wo o/p me pending status ayega promise ka
   
   let data= await res.json();           //yaha bhi await coz ye bhi to promise return karta he
    console.log(data.facts);

   
 console.log(res);
    }

    catch(error){
        console.log("some error has occured");
    }

}
//------------------------------------------------------------------------------------------------------------------------------------------------------
