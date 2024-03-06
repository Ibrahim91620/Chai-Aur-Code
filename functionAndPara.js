

//making function

// function sayMyName(){ //syntax

// console.log("I");
// console.log("B");
// console.log("R");
// console.log("A");
// console.log("H");
// console.log("I");
// console.log("M");
// }

//sayMyName();//it is reference parenthesis ()this indicate executing

// function addtwoNumber(number1,number2){//(parameters)
//    console.log(number1+number2);
// }
// sayMyName();
//it is reference parenthesis ()this indicate executing

// function addtwoNumber(number1,number2){//(parameters)
//     let result=number1+number2;
//     console.log("ibrahim");
//     return result;//this result is different from second result

// }
// const result=addtwoNumber(3,5);//
// console.log(result);

// addtwoNumber(3,"5");//it conver both number to string
// addtwoNumber(3,null); //when we call the function if we passing through function it is called arguments

function loginUserMessage(username ="hlw"){
    if(username===undefined){
        console.log("Please enter the username");
        return

    }
    return `${username}just logged in`
}
console.log(loginUserMessage());

//empty string is considered as false
//