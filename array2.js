//slice , splice 
// const myArr=[1,2,3,4,5,6]
// console.log("A",myArr);

// const myn1=myArr.slice(1,3);

// console.log(myn1);

// console.log("B ",myArr);
// const myn2=myArr.splice(3,1);// (it show the starting range+1, it show total number to be shown)'

// console.log(myn2);


// const cities=["india","pakistan","nepal","srilanka"];
// const newCity=cities.slice(1,3);
// console.log(newCity);

// // slice(it include that index,it does not include that index,it include just before );

// const mycity=cities.slice(2);//it does not include where it is starting or not
// console.log(mycity);   
//The splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.


//splice(start, optional delete count,optional item to add);
const mycity=["india","pakistan","nepal","bhutan","srilanka"];
//in splice the first part is showing in which index we have to start the deleteing the array
// mycity.splice(2,2,"afghanistan");//it indicate to start the index

// const newcity=mycity.findIndex(1);
// console.log(mycity);
const marvel_heroes=["thor","ironman","spiderman"];
const dc=["superman","flash","batman"];

// marvel_heroes.push(dc);
// console.log(marvel_heroes);

// console.log(marvel_heroes[3][0])
// const newArray=marvel_heroes.concat(dc);
// console.log(newArray);
//concat return new array hence we have to make neew variable to hold it
//spread operator

const all_new_heroes=[...marvel_heroes,...dc];
console.log(all_new_heroes);

const another_array=[1,2,3,4,5,[4,3,5,2],34,[2,1,4,3,]];
const real_another_array=another_array.flat(Infinity);

console.log(real_another_array);


// console.log(Array.isArray("ibrahim"));
// console.log(Array.from("hitesh"));

// console.log(Array.from((name:"ibrahim")));
let score =100;
let score1=200;
let score3=400;

// console.log(Array.of(score,score1,score3));

