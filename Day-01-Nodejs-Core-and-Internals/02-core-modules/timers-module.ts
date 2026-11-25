

//after some delay
// repeatedly after some internal - 2 seconds

import { log } from "console";


//settimeout
// setinterval
// clearinterval
// clerTimeout
// setimmediate

import { setTimeout as slepp  } from 'node:timers/promises'

function runSetTimeoutExample(): void{
    console.log('1. setTimeout example started');


    setTimeout(() =>{
        console.log('2. this runs after 1 second');
        
    },1000)


    console.log("3. this run immdeiately. node dosenmt wait for timers ")


}



function runClearTimeoutExample ():void {
    const timeerID = setTimeout(() =>{
        console.log("this message will not run");
        
    },2000)

    clearTimeout(timeerID);
    console.log('4. clearTimeout cancelled the 2 second timer')
    
}

//set interval is goig to run the callback gaian and again after
function runSetINtervalExample() : void {
    let count = 0;


    const internalID = setInterval(() =>{
        count++

        console.log(`5 . setInterval tick: ${count}`)

        if(count === 3){
            clearInterval(internalID)
            console.log('6. stopped setInterval after 3 ticks')
        }
    
    }, 1500);

}


function runSetImmediateExample(): void{
    setImmediate(() => {
        console.log("7. synchronous code after setImmediate");
        
    })

     console.log("8. synchronous code after setImmediate")


}


async function runPromisesWithTimers(): Promise<void>{
    console.log("9. eaiting for promise bades timer");

    await slepp(1500)

    console.log("10. 1.5 seconds have passed");
    
}

function runTimerDemo(): void{
    runSetTimeoutExample();
    runClearTimeoutExample();
    runSetINtervalExample();
    runSetImmediateExample();
    runPromisesWithTimers();


}


runTimerDemo()


runPromisesWithTimers().catch((err: unknown ) => {
    console.error("timer based demo failed", err);
})

      
