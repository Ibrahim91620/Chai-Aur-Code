//singleton


const mysym=Symbol("key1");
const JsUser={
    name: "ibrahim",
    age:22,
    location:"delhi",
    email:"ibrahim@google.com",
    [mysym]:"mykey1"
}


JsUser.email="ibrahim23@google.com"// its override last one


// Object.freeze(JsUser);//it freeze the element array it does not allow to override
// JsUser.email="heello@gmail.com"
// console.log(JsUser.email);

// console.log(JsUser.email);
// console.log(JsUser.age);
// console.log(JsUser.location);
// console.log(JsUser[mysym]);

JsUser.greeting=function(){
    console.log("Hello js User");
}
JsUser.greetingtwo=function(){
    console.log(`Hello js User,${this.age}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());