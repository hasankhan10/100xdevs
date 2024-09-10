const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()
const path = require("path")
const JWT_SECRET = "mehedihasan"
let users = []

function auth(req,res,next){
    const token = req.headers.token
    if(token){
        jwt.verify(token,JWT_SECRET,(err,decode)=>{
            if(err){
                res.status(401).send({
                    messege:"Unauthorized",
                    token:"true"
                })
            }else{
                req.user = decode
                next()
            }
        })
    }else{
        res.status(401).send({
            massege:"Unauthorized",
            token:"false"
        })
    }
}

app.use(express.json())
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
})

app.post("/signup",(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    if(username && password){
        try {

            users.push({
                username:username,
                password:password
            })
            res.status(200).send({
            massege:"You are successfully singup."
            })
            
        } catch (error) {
            res.status(505).send({
                error:"There is an error while signup!!!"
            })
        }
    }else{
        res.send({
            massege:"please give username and password correctly..."
        })
    }
})

app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    let foundUser = null;
    for(let i=0;i<users.length;i++){
        if(users[i].username===username && users[i].password === password){
            foundUser = users[i];
            break;
        }
    }
    if(foundUser){
        const token = jwt.sign({username:foundUser.username},JWT_SECRET);
        foundUser.token = token;
        res.status(200).json({
            massege:"You are successfull loged In.",
            token:token
        })
    }else{
        res.status(401).send({
            massege:"User not found or incorrrect password."
        })
    }
    
})

app.get("/me",auth,(req,res)=>{
    const user = req.user;
    res.send({
        username:user.username,
    })
})


app.listen(3000,()=>{
    console.log("Server running on port 3000");
    
})