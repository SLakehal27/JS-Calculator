let firstNum = 0;
let secondNum = 0;
let operator = "";
let isNumberSet = false

function add(num1,num2){
    return num1 + num2
}

function sub(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    if(num2 == 0){
    alert("nuh uh"); 
    return;
    }    
    return num1/num2;
}

function setOperator(sign){
    operator = sign;
}

function display(num){
    const displayNum = document.querySelector(".calctxt");
    if(isNumberSet){
        firstNum = num;
        displayNum.textContent = firstNum;
        isNumberSet = true;
    }
    else{
        secondNum = num;
        displayNum.textContent = secondNum;
    }
} 

function operate(){

}