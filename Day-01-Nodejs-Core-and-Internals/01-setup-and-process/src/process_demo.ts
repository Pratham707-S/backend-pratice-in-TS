



// console.log(process.argv)

import { log } from "console"


// const args = process.argv.slice(2)
// console.log("only user input", args)



// process.on('exit',() =>{
//     console.log("by bye chowkidar bol rha hai: ab prgra badn ho ja gaya");
    
// })


// console.log("1. Program shuru hua...");
// console.log("2. kam chl rha hai ");


// console.log("My Process ID:", process.pid);
// console.log("My OS Platform:", process.platform);
// console.log("Current Directory:", process.cwd());
// console.log("Node Version:", process.version);

process.on("exit" , (code) =>{
    console.log(`\n total runtime: ${process.uptime().toFixed(3)}s `)
    console.log(`process exited with code: ${code}`);


})



process.on("SIGINT", () => {
    console.log("\n [SIGINI] ctrl + c dabaya gaya!");
    console.log("server aur datbasae safely band kar rha hu...");
    process.exit(0);
    
    
});


const args = process.argv.slice(2);
const command = args[0];


if (command === "info") {
  const mem = process.memoryUsage();
  console.log("📊 === SERVER HARDWARE INFO ===");
  console.log(`• Process ID (PID) : ${process.pid}`);
  console.log(`• OS Platform      : ${process.platform}`);
  console.log(`• Node Version     : ${process.version}`);
  console.log(`• Working Directory: ${process.cwd()}`);
  console.log(`• RAM Memory Used  : ${(mem.heapUsed / 1024 / 1024).toFixed(2)} MB`);
  process.exit(0); // 0 = Success
}


if (command === "start") {
  const PORT = args[1] || process.env.PORT || 5000;
  const ENV = process.env.NODE_ENV || "development";
  console.log("🚀 ===================================");
  console.log(`🟢 SERVER LIVE HO GAYA!`);
  console.log(`📡 Port: ${PORT} | Mode: ${ENV} | PID: ${process.pid}`);
  console.log("👉 Test Graceful Shutdown: Terminal me 'Ctrl + C' dabao!");
  console.log("======================================");
 
  setInterval(() => {
   
}, 1000);
}