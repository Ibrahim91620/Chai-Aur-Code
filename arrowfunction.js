// const username={
//    username:"ibrahim",
//    price: 999,
//    welcomeMessage:function(){
//     console.log(`${this.username},welcome to website`);

//    }

// }
// user.welcomeMessage()

// user.username="washim"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username="shams"
//     console.log(this.username);//we cannot use this keyword in function
// }
//this keyword refer the current context
//this keyword  use only in object not in function

const chai =() =>{  //arrow function
    let username="washim"
    console.log(this.username);
}

chai()
const college = (num1,num2) =>{
    return num1+num2
}
console.log(college(3,4))

// implicit return 
const addtwo=(num1,num2)  =>  num1+num2 // here we do not use curly braces, so we have donot use return keyword
console.log(addtwo(4,9))

//const username =()=>console.log("how are you ");

const username =()=> { //for two line function
    return 'ibrahim'};
console.log(username());

let hello = ()=> 'how are you';
console.log(hello());

setTimeout(()=>{
    console.log("yes bro");

},3000);

// const calc=(num1,num2)=>{return num1+num2};
const calc=(num1,num2)=> num1+num2 ;

console.log(calc(10,20));