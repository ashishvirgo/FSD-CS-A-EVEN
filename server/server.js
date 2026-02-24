import http from "http"
import os, { freemem } from "os"
const port=5001;
let users = [
    { id: 1, name: "Ashish", age: 25 },
    { id: 2, name: "Rahul", age: 30 }
];
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
        // res1.setHeader("Content-Type","application/json")
        res1.write(JSON.stringify(sysdata))
    }
    else if(url=="/users" && method=="GET"){
        res1.write(JSON.stringify(users))
    }
    else if(url=="/createuser" && method=="POST"){
        res1.write("Create User")
    }
    else if(url.startsWith("/users/")&& method=="GET"){
        const id=url.split("/")[2];
        const user=users.filter(user=>user.id==id);
        res1.write(JSON.stringify(user))
    }
    else if(url.startsWith("/users/")&& method=="PUT"){
        const id=url.split("/")[2];
        const user=users.filter(user=>user.id==id);
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