// Practice fs sync, callback & promise APIs here

// import fs from "node:fs/promises";
// import path from "node:path";


// async function  deepfilDemi() {
//     const folderPath = path.join(process.cwd(), "04-fs-buffers-streams",
// "logs");
// const filePath = path.join(folderPath, "app.log");


// try{
//     await fs.mkdir(folderPath,{ recursive: true});

//     await fs.writeFile(filePath, "hello bro first file!\n", "utf-8");


//     const data = await fs.readFile(filePath, "utf-8");
//     console.log("File me ya likh hai",data)
// }
// catch (err){
//    console.log("error aayi", err);
   

// }
// }deepfilDemi();



// fs.mkdir(dir,{
// rescurive: true})
// folder banan



// fs.writeFile(path,data)
// file create 

//fs.appendFile(path,data)
// file me value add krna


//fs.readFile(path,utf-8)
// file me se value read krna


//fs.unlink(path)
// file delete krna


// fstat.unlink(path)
// file ke bare me info lena (kya wo file hai ya folder)



import fs from "node:fs/promises"


async function myteam(){
    await fs.writeFile("deepak.txt","pratham.txt")
    console.log("file ban gayi!");

    await fs.appendFile("deepak.txt","\n pratham is  back in pratice")


    // await fs.unlink("deepak.txt")
    // console.log("File delete hogai beta");
    


    const data = await fs.readFile("deepak.txt","utf-8")
    console.log("file data:", data);
    
    
}


myteam();