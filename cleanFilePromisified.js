const fs = require("fs")

function cleanFilePromisified(filePath){
    return new Promise((resolve,err)=>{
        fs.readFile(filePath,"utf-8",(error,data)=>{
            if (error) {
                err("File reading wrong!!!")
            } else {
                fs.writeFile(filePath,data.trim(),errr=>{
                    if (errr) {
                        err("FIle writing wrong!!!")
                    } else {
                        resolve("Cleaned file successfully!!!")
                    }
                })
            }
        })
    })
}
function cleanSuccess(resolve){
    console.log(resolve);
    
}
function cleanFailed(err){
    console.log(err);
    
}
cleanFilePromisified("b.txt").then(cleanSuccess).catch(cleanFailed)