const BASE_URL =
  "https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api";

let button = document.querySelector(".btn");
let input = document.querySelector(".value");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
let msg = document.getElementById("msg-container");

  // for (code in countryList){
    // console.log(code ,countryList[code]);
  // }
  let dropdowns = document.querySelectorAll(".dropdown select");
  // console.log(dropdowns);
  
  for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;

        if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected";
        }
        if(select.name==="to" && currCode==="INR")
        {
            newOption.selected="selected";
        }
      select.append(newOption);
    }
  select.addEventListener("change",(evt)=>{
 updateFlag(evt.target);
  });  
  }
  const updateFlag=(element)=>{
 
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
  }

button.addEventListener("click",async (evt)=>{
  evt.preventDefault();
    value = input.value;
    console.log(fromCurr.value," ",toCurr.value)
    const URL = `${BASE_URL}/${toCurr.value}_${fromCurr.value}.json`;
    let response = await fetch(URL);
    // console.log(response);
      let data = response.json();
      data.then((res)=>{
        console.log(res.rate);
        console.log(input.value);
        let finalValue = input.value*res.rate;
        console.log(msg.innerText)
        msg.innerText=`${input.value} ${fromCurr.value} = ${finalValue} ${toCurr.value}`;
         
      })
       
});