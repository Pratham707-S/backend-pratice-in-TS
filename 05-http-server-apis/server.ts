// Practice vanilla Node http server & routing here









import { log } from "console";
import http from "http";



const server = http.createServer((req,res) =>{
    console.log("new requesr aayi",req.method, req.url)


    if(req.url ==="/" && req.method === "GET"){
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("Home Page: server Live hai");
    }else if (req.url === "/api/user" && req.method === "GET")
    {
        res.writeHead(200, {"content-type": "application/json"})
        const user = {id : 1, name: "Pratham",skill: "Backend"};
        res.end(JSON.stringify(user));
    }else{
        res.writeHead(404, {"content-type": "text/plain"});
        res.end("404: page mhi mila")
    }

})

    const PORT = 3000;

    server.listen(PORT,() =>{
        console.log(`server chal rha hai: ${PORT} `);
        
    });
    
