const fs = require("fs");
function readFilePromisified(fileName){
    const p = new Promise((resolve,reject)=>{
        fs.readFile(fileName,"utf-8",(err,data)=>{
            if (err) {
                reject("Error while file reading!")
            }else resolve(data)
        })
    })
    return p;
}


function successfull(data){
    console.log("The file read is successfull: ",data);
}
function failed(err){
    console.log("There is an error: ",err);
}

readFilePromisified("a.txt").then(successfull).catch(failed)