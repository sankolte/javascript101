// promise >> object which represent > the result (completion or failure) of an asynchronous operation which is not yet completed but will be completed in the future
// operations like >> fetch, setTimeout, readFile , database operations, password hasing and all >> basically jaha per asynchronous operation perform hoti hai waha per promise ka use hota hai 

// abb waha pe we have got two otions to handle these async operations >> ekto async await laga lo (jiske sath try - catch for error handling) ya toh ek to promise ka use kar lo (.then .cathch ke sath obvio)
// ya to udr promise ussed with async await >> ha ye bhi possibe he but iska prob is ye direclty errors handle nahi kar dakta >> iss liye use tru catch >> promiseThree>>



////////////////
// promises has 3 states >> pending, fulfilled, rejected

// pehele lets see ki how to create a promise 
const promiseOne = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        console.log("kuch to async kaam ho raha hai jo 3 sec baad comlete hoga ");
        resolve()      // basically resolve() ka matlab hai ki promise is fulfilled and we can consume it now >> bascially abb now and only now  >>then block ke andar ka code execute hoga
        
        reject()       // basically reject() ka matlab hai ki promise is rejected and we can consume it now >> bascially abb now and only now  >>catch block ke andar ka code execute hoga
  
    },3000);


});

promiseOne.then((data)=>{
    console.log("promise consumed successfully");
})

promiseOne.catch((err)=>{
    console.log("promise rejected");
})

// this is how we connect then-reolve and catch-reject to the promise and to consmue that promis
 //  output:
//  kuch to async kaam ho raha hai
// promise consumed successfully

//pehele wo preint hua and then ye >>


// abhi dekho sara kaam will happens in .then  >>> coz hum pehele check karnege na 
// ki bhai  

const promiseTwo = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: "john", email: "john@example.com"});
        }else{
            reject("Error: Something went wrong");
        }
    },3000);
});

promiseTwo

.then((user)=>{
    console.log("promise consumed successfully", user);
    return user.username;
}).then((username)=>{
    console.log("username is", username);
})
.catch((err)=>{
    console.log("promise rejected", err);
})
.finally(()=>{
    console.log("promise is either resolved or rejected");
})

// basivally aise channing karte he hum >> like ekk then ka output dusre then me pass karte he >> aur agar koi error aata hai toh catch block me jaata hai
// standard pracise he ye 


        
const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: "john", email: "john@example.com"});
        }else{
            reject("Error: Something went wrong");
        }
    },3000);
});

async function consumePromise() {
    try {
        const user = await promiseThree;    // promiseThree() aisa nahi karna coz primsieThree ekk obj he 
        console.log("promise consumed successfully", user);
    } catch (err) {
        console.log("promise rejected", err);
    }
}


//---------------------------------------

// ekk same chiz ko dono ethid se karte 

// fetch retursn a proomise >>
// handling that with async await 

async function getJokes(){
    try{

        const response = await fetch("https://api.api-ninjas.com/v1/jokes");
        const data = await response.json(); 
        console.log(data);


    }catch(err){

        console.log(err);

    }
}

getJokes();

// handling it by .then .catch an all 

fetch("https://api.api-ninjas.com/v1/jokes")
.then((res)=>{
    return res.json;
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})

// khatam>>>>>>>>>>>

// ur quis 
"If .then() runs after resolve(), where is resolve() in fetch()? I don't see it!"
"fetch() creates and resolves the Promise internally. You don't see its resolve() because the browser wrote that code for you."

// agar fetch na hoke kuch dusra hota toh >> hum jaise karte the wiae karneeg resolve / reject / .then / .catch ?>>> like khud proise create karnege ki bhai ye aopearion time lagega and then usko handle bhi karte i,e i=usko consume bhi karte

