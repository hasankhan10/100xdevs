const express = require("express")
const app = express()
const bodyParser = require("body-parser")
let id = 0
let tasks = []

app.use(bodyParser.json())
//home page of todo
app.get("/",(req,res)=>{
    res.send("Wellcome to the todo app making by express.")
})
//get all todos
app.get("/todos",(req,res)=>{
    res.status(200).send(tasks)
})
//Retrieve a specific todo item by ID
app.get("/todos/:id",(req,res)=>{
    const todoId = req.params.id
    if(tasks[todoId]){
        res.status(200).send(tasks[todoId])
    }else{
        res.status(404).send("Not found any task")
    }
})
//Create a new todo item
app.post("/todos",(req,res)=>{
    const data = req.body
    try {
        if(data){
            data.id = id;
            tasks.push(data)
            res.status(200).send("task add successfull.")
            id = id+1;
        }
    } catch (error) {
        throw Error(error)
    }
})
//edit task
app.put("/todos/:id",(req,res)=>{
    const data = req.body
    const id = req.params.id
    if(tasks[id]){
        try {
            tasks[id] = {
                ...tasks[id],
                ...data
            }
            res.status(200).send("Update task list according to id")
        } catch (error) {
            res.status(500).send("error updating task.")
        }
    }else{
        res.status(404).send("Item not found.")
    }
})
//delete a task
app.delete("/todos/:id",(req,res)=>{
    const id = req.params.id;
    if(tasks[id]){
        tasks.splice(id,1)
        res.status(200).send("Delete successfull the task")
    }else{
        res.status(404).send("Item not found.")
    }
})

app.listen(3000)