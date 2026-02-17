import http from "http"
import os, { freemem } from "os"
const port=5001;
const server=http.createServer((req1,res1)=>{
    const url=req1.url;
    const method=req1.method;
    if(url=="/" && method=="GET"){
        res1.write("Home Page")
    }
    else if(url=="/contact" && method=="GET"){
        res1.write("Contact Page")
    }
    else if(url=="/system" && method=="GET"){
        const sysdata={
            operatingSystem:os.platform(),
            Architecture: os.arch(),
            cpuLength:os.cpus().length,
            TotalMemory: (os.totalmem()/1024**3).toFixed(2)+"GB",
            freeMemory: (os.freemem()/1024**3).toFixed(2)+"GB",
        }
        res1.write(JSON.stringify(sysdata))
    }
    else if(url=="/users" && method=="GET"){
        res1.write("List of users")
    }
    else if(url=="/createuser" && method=="POST"){
        res1.write("Create User")
    }
    else if(url.startsWith("/users/")&& method=="GET"){
        res1.write("Serach User")
    }
    else if(url.startsWith("/users/")&& method=="PUT"){
        res1.write("Update User")
    }
    else if(url.startsWith("/users/")&& method=="DELETE"){
        res1.write("DELETE User")
    }
    else{
        res1.write("Error Page")
    }
    res1.end();
})
server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})