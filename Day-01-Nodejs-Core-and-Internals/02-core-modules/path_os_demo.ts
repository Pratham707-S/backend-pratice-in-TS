// Practice path & os modules here
import os from "node:os";


console.log("0S Platform:", os.platform());
console.log("OS Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("OS Type :",os.type());
console.log("System uptime (hrs):", (os.uptime() / 3600).toFixed(2));

console.log("\n=== 2. CPU CORES (Clustering & Scaling) ===");
const cpus = os.cpus();
console.log("Total CPU Cores:", cpus.length);
console.log("CPU Model      :", cpus[0].model);
console.log("CPU Speed (MHz):", cpus[0].speed);



console.log("\n=== 3. RAM MEMORY STATS ===");
const totalRamGB = (os.totalmem() / (1024 ** 3)).toFixed(2);
const freeRamGB = (os.freemem() / (1024 ** 3)).toFixed(2);
const usedRamGB = (Number(totalRamGB) - Number(freeRamGB)).toFixed(2);




console.log(`Total RAM: ${totalRamGB} GB`);
console.log(`Free RAM : ${freeRamGB} GB`);
console.log(`Used RAM : ${usedRamGB} GB`);



console.log("\n=== 4. SYSTEM DIRECTORIES ===");
console.log("User Home Dir :", os.homedir()); // e.g. /Users/pratham
console.log("Temp Files Dir:", os.tmpdir());



