const express = require("express")
const app = express()

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("wellcome to our server!!!")
})
//add the query
app.get("/add",(req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        ans:a+b
    })
})
//substruction the query
app.get("/substruction",(req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        ans:a-b
    })
})
//multiply the query
app.get("/multiply",(req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        ans:a*b
    })
})
//devision the query
app.get("/devision",(req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        ans:a/b
    })
})

app.listen(3000)