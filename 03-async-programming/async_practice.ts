// // Practice callbacks, promises, async/await here

import { log } from "console";
import { resolve } from "dns";

// import { callbackify } from "node:util";


// type Usercallback = (err: Error | null, user?: {id:number; name:string}) => void


// function getUserFromDB(userId: number, callback: Usercallback): void{
//     console.log(`1.Searching user ${userId} in database...`);
    
    
    
//     setTimeout(() => {
//         if (userId <= 0) {
//             callback(new Error("Invalid User ID! ID 0 se bada hona chahiye."));
//             return;
//         }
        
//         const user = { id: userId, name: "Pratham" };
//         callback(null, user);
//     }, 1500);
    
// }


//   console.log("0. Request aayi...");

// getUserFromDB(101, (err, user) => {
//   if (err) {
//     console.error(" Error:", err.message);
//     return;
//   }
//   console.log("3. User mil gaya:", user);
// });

// console.log("2. Main aage ke kaam kar raha hu (Non-blocking!)");





// function orderpizza(callMeBACK: () => void){
//     console.log("1.pizza oder de diya!");



//     setTimeout(() => {
//        console.log("3. pizzza ready hai sir");
//        callMeBACK()
        
//     },2000)
    
// }



// orderpizza(() =>{
//     console.log("4 waah ab main pizza kah rh ahu ");
    
// })


// console.log("2. tab tak main aone phone chal rha hu ");



// function iwantuKajal(callMe: () =>void){
//     console.log("i want huge u ");


//     setTimeout(() =>{
//         console.log("oke coming wait babe");
//         callMe()
//     },2000)
    
// }



// iwantuKajal(() =>{
//     console.log("i am with u ");
    
// })


// console.log(" wait bass aagai");




// promise pratice by hand not using ai like u idoits 


// function iwantuKajal(): Promise<string>{
//     console.log("1. i wamr huge u");

//     return new Promise((resolve) =>{
//         setTimeout(() =>{
//             console.log("oke comin wait babe");
//             resolve("4 i am with u ")
            
//         },2000)
//     })
    
// }



// async function startmeetinf(){
//     const message = await iwantuKajal();
//     console.log(message);
    
// }


// startmeetinf();
// console.log("wair bass aagai");

 



// try and catch
