//const map1=new Map();
const mynumber=[1,2,3,4,5,6,7,8,9,10]

const newNums=mynumber.map((num)=> num*5)
                       .map((num)=>num+1).filter((num)=>num>=10);
                     

           //          console.log(newNums);
                     

          const nums=[1,2,3,4];
        //   const intitial=0;
        //   const total=nums.reduce(
            
        //     (acc,currentValue)=>acc+currentValue+intitial,
            
      //    );

        //  console.log(total);

          // const myTotal=nums.reduce((currValue,acc)=>currValue+acc,0);//arrow function
          // console.log(myTotal);

          const ShoppingCart=[
            {
              Course: "mobile course",
              price: 5999

            },
            {
              Course: "web dev Course",
              price: 2999

            },
            {
              Course: "Social media Marketing Course",
              price: 999

            },
          ]

         const total= ShoppingCart.reduce((acc,item)=>item.price+acc,0);
   console.log(total);

   console.log("ibrahim")

          
