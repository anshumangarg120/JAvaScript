

function myName (){
    console.log("A");
    console.log("N");
    console.log("I");
    
}

// myName()

// function addTwoNumbers (number1, number2){
// console.log(number1 + number2)
// }

function addTwoNumbers (number1, number2){
    // let result =  number1 + number2
    // return result

        return number1 + number2
    }

const result = addTwoNumbers(100,500)

// console.log("hh", result);


function loginUserMessage (username){
    if (username === undefined){
        console.log("please enter your username");
        return 
    }
    return `${username} logged in`
}

// console.log(loginUserMessage( ));

function calculateCartPrice (num1){
 return num1
}