const { promises } = require("dns")
const fs = require("fs")

function writeFilePromisified(content,file){
    
    return new Promise((resolve,error)=>{
        fs.writeFile(file,content,err=>{
            if (err) {
                error("There is Something wrong!!!")
            } else {
                resolve("File Written Successfully!!!")
            }
        })
    })
}

function writeFilaSuccess(resolve){
    console.log(resolve);
    
}
function writeFileFailed(error){
    console.log(error);
    
}

writeFilePromisified("i am don!","b.txt").then(writeFilaSuccess).catch(writeFileFailed)