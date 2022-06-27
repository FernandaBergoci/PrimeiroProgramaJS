var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

//Eventos

document.getElementById('adicionar').addEventListener("click", increment);
document.getElementById('subtrair').addEventListener("click", decrement);


function increment(){
    if(currentNumber <10){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }

    if(currentNumber<0){
        currentNumberWrapper.style.color = "red";
    }else{
        currentNumberWrapper.style.color = "black";
    }
    
 
}
function decrement(){
    
    if(currentNumber>-10){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }

    if(currentNumber<0){
        currentNumberWrapper.style.color = "red";
    }else{
        currentNumberWrapper.style.color = "black";
    }
}