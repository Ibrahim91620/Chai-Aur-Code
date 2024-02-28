//primtive


//7 types :String,Number,Boolean,null,undefined, Symbol
//BigInt

//Reference Type(Non-primitive)
//Arrays,Objects, Functions
//Dynamically typed language Because data type will automatically assigned at the time of compilation or code execution i ,think
//Undefined: Represents a variable that has been declared but hasn't been assigned a value yest. 
//let x;
// null: it represent of empty type value, it is special type and it is object type :
//
const score=100;;;
const ScoreValue=100.3

const isLoggedIn =false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id===anotherid);
const BigInt=12325456356354354354325;
console.log(BigInt);
const heros=["shaktimaan","krrish","doga"]//reference type aur non-reference type
let myObj={
    name:"ibrahim",
    age:22,

}
 console.log(myObj);
 console.log(heros);

const myFunction=function(){
    console.log("hello world");
}

console.log(typeof myObj);//array is object type
console.log(typeof null); 
console.log(typeof myFunction);
