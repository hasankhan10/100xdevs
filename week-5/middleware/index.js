const express = require("express")
const app =  express()

let totalReq = 0
function middleware(req,res,next){
    console.log(req.method);
    console.log(req.hostname);
    console.log(new Date());
    totalReq++;
    next()

}
app.use(middleware)
app.get("/",(req,res)=>{
    res.send("Wellcome to our server!!!")
})
app.get("/expose",(req,res)=>{
    res.send({
        totalRequest:totalReq
    })
})

app.listen(3000)

