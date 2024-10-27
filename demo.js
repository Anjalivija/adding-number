// selecting the input
const box1=document.getElementById("box1")
const box2=document.getElementById("box2")
const result=document.getElementById("result")


// add two box
   
// function add
function addNumber(){
    const box1Value=Number(box1.value);
    const box2Value=Number(box2.value);
    const total=box1Value + box2Value; 

    // return document.getElementById("result").innerHTML=total
    result.textContent=total

}

// function sub
function subNumber(){
    const box1Value=Number(box1.value)
    const box2Value=Number(box2.value)
    const sumTotal=box1Value-box2Value

    result.textContent=sumTotal
}

// function multiple
function mul(){
    const box1Value=Number(box1.Value)
    const box2Value=Number(box2.value)
    const mulTotal=box1Value * box2Value
    return document.getElementById("result").innerHTML=mulTotal
    // result.textContent=mulTotal
}

function divs(){

   const box1Value=Number(box1.value)
   const box2Value=Number(box2.value)
   const divTotal=box1Value/box2Value;
   return document.getElementById("result").innerHTML=divTotal
}


