import fs from "fs/promises"
async function loaduser(){
    try{
      const data=await fs.readFile("users.json","utf-8");
      console.log("Data=",data);
    }
    catch(err){
        console.error("Error=",err.message)
    }
}

function saveUser(user){
    try{
       fs.writeFile("users.json",user)
    }
    catch(err){
      console.error("Error=",err.message)
    }
}

loaduser();
saveUser("Ashish Bajpai");
saveUser("Aman Bajpai");
loaduser();
