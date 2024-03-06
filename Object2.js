//const tinderUser =new Object()

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="ibrahim"
tinderUser.isloggedIn=false

const regularUser={
    email:"ibrahim@gmail.com",
    fullname:{
        userfullname:{
            firstname:"ibrahim",
            lastname:"faizi"

        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1={1:"a",2:"b"}

const obj2={3:"a", 4:"b"}
const obj3={...obj1,...obj2};
console.log(obj3);
// //const obj3={obj1,obj2}
// const obj3=Object.assign(obj1,obj2);


console.log(tinderUser);
console.log(Object.values(tinderUser));
console.log(Object.keys(tinderUser));
// console.log(obj3);//Object.assign()is static method copies
// enumerable own from one or more source objects to a target object.
//It return the modified target object.