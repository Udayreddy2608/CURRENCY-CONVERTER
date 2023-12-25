let URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

let finalmsg=document.getElementById("finmsg")

let convBtn=document.getElementById("convert");

let entry=document.getElementById("entry");

const dropdowns = document.querySelectorAll(".dropdown select");

for (select of dropdowns){
    for (code in countryList){
        let newOption = document.createElement("option");
        newOption.innerText=code;
        newOption.value=code;
        if(select.name==="from" && code==="USD"){
            newOption.selected="selected";
        }else if (select.name==="to" && code==="INR"){
            newOption.selected="selected"
        }
        select.append(newOption);
    }
}



const updateFlag=()=>{
    let select=dropdowns[0]
    let currCode=select.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let frImg=document.querySelector(".from img");
    frImg.src=newSrc;
}


const updateToFlag=()=>{
    let select=dropdowns[1];
    let currCode=select.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let frImg=document.querySelector(".to img");
    frImg.src=newSrc;
}

const getExchange= async()=>{
    let select1=dropdowns[0];
    let countryCode=(select1.value).toLowerCase();
    let select2=dropdowns[1];
    let countryCode2=(select2.value).toLowerCase();
    console.log(countryCode,countryCode2);
    let newUrl=`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${countryCode}/${countryCode2}.json`;
    let response= await fetch(newUrl);
    let data= await response.json()
    console.log(data[countryCode2])
    finalmsg.innerText= `${entry.value} ${countryCode.toUpperCase()} = ${((entry.value)*data[countryCode2])} ${countryCode2.toUpperCase()}`
    console.log(finalmsg.innerText)
}



