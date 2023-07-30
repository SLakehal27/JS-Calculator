let firstNum = 0;
let secondNum = 0;
let operator = "";
let isNumberSet = false;
let isOperatorSet = false;

const LIMIT = 13;
const DISPLAY_NUM = document.querySelector(".calctxt");
const RESULT = document.querySelector(".calcrestxt");
const ROUND = 3;

function add(num1,num2){
    return Math.round(num1 + num2,ROUND);
}

function sub(num1,num2){
    return Math.round(num1 - num2,ROUND);
}

function multiply(num1,num2){
    return Math.round(num1 * num2,ROUND);
}

function divide(num1,num2){
    if(num2 == 0)
    {
        alert("nuh uh"); 
        clearDisplay();
        return;
    }    
    return Math.round(num1/num2,ROUND);
}

function setOperator(sign){
    DISPLAY_NUM.textContent = firstNum.toString() + " " + sign + " ";
    
    if(isOperatorSet){
        operate();
        DISPLAY_NUM.textContent = firstNum.toString() + " " + sign + " ";
        operator = sign;
        return;
    }
    else
    {
        isOperatorSet = true;
        operator = sign;
    }
    
}

function clearDisplay(){
    firstNum = 0;
    secondNum = 0;
    operator = "";
    
    DISPLAY_NUM.textContent = firstNum;
    RESULT.textContent = "";

    isNumberSet = false;
    isOperatorSet = false;
}

function deleteDisplay(){
    clearDisplay();
    DISPLAY_NUM.textContent = "";
}

function display(num){
    RESULT.textContent = "";
    if(DISPLAY_NUM.textContent.length > LIMIT){
        return;
    } 

    if(!isNumberSet){
        DISPLAY_NUM.textContent = num;
        firstNum = num;
        isNumberSet = true;
        return;
    }  

    if(!isOperatorSet)
    {
        DISPLAY_NUM.textContent += num;
        firstNum = parseInt(DISPLAY_NUM.textContent);
    }
    else
    {
        DISPLAY_NUM.textContent += num;
        secondNum = parseInt(DISPLAY_NUM.textContent.split(operator).pop());
    }
} 

function operate(){
    switch(operator){
        case "+":
            RESULT.textContent = add(parseInt(firstNum),parseInt(secondNum));
            break;
        case "-":
            RESULT.textContent = sub(parseInt(firstNum),parseInt(secondNum));
            break;
        case "×":
            RESULT.textContent = multiply(parseInt(firstNum),parseInt(secondNum));
            break;
        case "÷":
            RESULT.textContent = divide(parseInt(firstNum),parseInt(secondNum));
            break;
    }

    firstNum = parseInt(RESULT.textContent);
    secondNum = 0;
}