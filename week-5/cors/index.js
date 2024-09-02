const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())
app.get("/", (req, res) => {
    res.send("Welcome to our server!")
})
app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        result: a + b
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000...")
})