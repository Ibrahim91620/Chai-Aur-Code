//immediate invoked function expression(iife)

(function chai(){
    //named iife
    console.log(`DB Connected`);

})();
((username)=>{
    console.log(`db connected two ${username}`);
}

)('ibrahim');


// ssimple iifi

((name)=>{
 console.log(`DB connected ${name}`);
})("washim")