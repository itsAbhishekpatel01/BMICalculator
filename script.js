const height = document.querySelector("#height");
const weight = document.querySelector("#weight");

calculateButton = document.querySelector("button")
calculateButton.addEventListener("click", calculate);

function calculate (){
    const h = Number(height.value);
    const w = Number(weight.value);
if(!(h + w))
    alert("Enter Valid inputs");
// else if(!height.value)
//     alert("Enter Height");
// else if(!weight.value)
//     alert("Enter Weight");
else{
    const bmi = ((w/(h*h))*10000).toFixed(2);
    const result = document.querySelector("#results");
    result.innerText=`You BMI is ${bmi}`;
    }
}


