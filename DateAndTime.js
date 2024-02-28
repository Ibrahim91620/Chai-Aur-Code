//Dates
let myDate=new Date()

// console.log(myDate.toDateString());
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleDateString());
// console.log(myDate.getDate());
// console.log(typeof myDate);
// let myCreatedDate= new Date(2024,11,26);//in javascript months are starting from 0.
// let myCreatedDate= new Date(2024,11,26,4,25);//in javascript months are starting from 0.
// console.log(myCreatedDate.toLocaleString());

// let myTimeSTamp=Date.now();

// console.log(myTimeSTamp);
const newDate=new Date()
// console.log(Date.now());
// console.log()=new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth())

newDate.toLocaleString('default',{
    weekday:"long",
    
})