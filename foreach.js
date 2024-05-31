const coding=["js","ruby","java","python","cpp"]

// coding.forEach(function (val){
//  console.log(val);
// })
// coding.forEach((val)=>{ //arrow function
//     console.log(val);
// }) 

// function print(item){
//     console.log(item);
// }
// coding.forEach(print);

// const mycoding=[

//     {language:"java",
//      languagefilename: "java"},

//      {
//         language:"python",
//         languagefilename:"py"
//      }
// ]

// mycoding.forEach(function (val){
//     console.log(val.languagefilename);


// })
// coding.forEach((item)=>{
//     console.log(item);

// })

const myNums=[1,2,3,4,5,6]

const newNums=myNums.filter((num)=> num>2)
console.log(newNums);