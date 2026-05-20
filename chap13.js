 //AXIOS
 //alternative of fetch() is js 
//genrally we install that liabarry but here we just copied the cdn link in html file
//this will retunn direct json data parse karn nahi padta like after suing fetch func

let url="https://catfact.ninja/fact";

async function getfacts() {
    try {
        let res = await axios.get(url);
        console.log(res.data);
    } catch (err) {
        console.log("Error:", err);
    }
}

getfacts();



//now thoda html mix karte he 

let btn=document.querySelector("button");         
btn.addEventListener("click",async ()=>{
  
   let facts= await getfacts();
    console.log(facts);
    let p=document.querySelector("#result");
    p.innerText=facts;




});

let url2="https://catfact.ninja/fact";

async function getfacts() {
    try {
        let res = await axios.get(url2);
        return res.data.fact;
    } catch (err) {
        console.log("Error:", err);
        return "something went wrong";

    }
}



//Whenever something takes time, JavaScript doesn’t block or wait.
//Instead, it immediately gives back a Promise — a placeholder for the future result.
//here as soon as will click button it will retunr a fact on console but iw will give it in promise right what if i just want only that fact 
//thats why we use async and await there in upper block

//here when i tried to run the code whats the prob here whye its giving me undefined on web page when i am clicking button
//but console pe fact aa raha tha perfect 
//this happend because mene async func getfacts ko kuch return me diya hi nahi tha pehele to by default it retunred undefined

//Simple Rule to Remember:
//❗ If you await a function, that function MUST return a value.


//for getting dog pictures

let url3 = "https://dog.ceo/api/breeds/image/random";
//sirf isse replace karo and minor chnages in above code
//here jaise hum above code me para tag me result store karrvaye na idhar img tag me karvana
//use element.setAttribute("attributeName", "value");

//img.setAttribute("src",link);
//ver apan link mhanun variable bana lenge jisme store hoga that image link

//--------------------------------------------------------------------------------------------------------------
//sending headers in axios 

const url4="https://icanhazdadjoke.com/";

async function getjokes(){
    try{
        const config={headers:{Accept:"application/json"}};         //this way we pass headers 

        let res=await axios(url,config);                            //and then we do this 

        console.log(res)

    }
    catch(err){

        console.log(err);

    }
}


//----------------------------------------------------------------------------------------------------------
//updating query strings

let url5="https://universities.hipolabs.com/search?name=";

let country="nepal";

async function getcolleges(){
    try{
        let res=await axios.get(url+country);
        console.log(res);

    }
    catch(err){
        console.log("error :",err);
    }
}
   
let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    getcolleges();

});