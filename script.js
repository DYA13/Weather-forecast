const api={
      //ссылка
    endpoint: "https://api.openweathermap.org/data/2.5/",
    //API key
    key: "50e3487e27f7dbda4cb229275c8aee77",
}

const input=document.querySelector("#input");
input.addEventListener("keydown", enter);

function enter(e){
   if (e.keyCode===13){
   getInfo(input.value);
   }
}
async function getInfo(data){
const res= await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
const result=await res.json();
console.log(result);
displayResult(result);

}


function displayResult(result){
   let city=document.querySelector("#city");
   city.textContent=`${result.name}, ${result.sys.country}`;

   //Date
getOurDate();



let temperature=document.querySelector("#temperature");
temperature.innerHTML=`${Math.round(result.main.temp)}<span>°</span>`;

let feelsLike=document.querySelector("#feelslike");
feelsLike.innerHTML=`Feels like: ${Math.round(result.main.feels_like)}<span>°</span>`;

let conditions=document.querySelector("#conditions");
conditions.textContent=`${result.weather[0].main}`;

let variation=document.querySelector("#variation");
variation.innerHTML="Min:" +" "+ `${Math.round(result.main.temp_min)}<span>°</span>` +" "+ "Max:"+" " +`${Math.round(result.main.temp_max)}<span>°</span>`;
}
function getOurDate() {
//Today's Date
const myDate=new Date;
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//Day
let day=days[myDate.getDay()];

//Date
let todayDate=myDate.getDate();

//Month
let month=months[myDate.getMonth()];
//Year
let year=myDate.getFullYear();


let showDate=document.querySelector("#date");
showDate.textContent=`${day}`+" "+`${todayDate}`+" "+`${month}`+" "+`${year}`

}
