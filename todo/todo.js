const input = document.querySelector("input")
const tasksDiv = document.getElementById("tasks")
let todoTask = []
let index = 0
function getValue(){
    let value = input.value
    if(value===""){
        alert("Please enter some content!")
        return
    }
    todoTask.push({
        id:index,
        title:value
    })
    index = index +1;
    render()
    input.value=""
}
function getDelete(elemId) {
    todoTask = todoTask.filter(elem => elem.id !== elemId)
    render()
}

function render(){
    tasksDiv.innerHTML = "";
    todoTask.forEach((elem)=>{
        //create div
        let div = document.createElement("div")
        div.setAttribute("id","task")
        //create h3
        let h3 = document.createElement("h3")
        h3.innerText = elem.title
         //create button
        let button = document.createElement("button")
        button.setAttribute("onclick",`getDelete(${elem.id})`)
        button.innerText = "Delete"
        // insert h3 and button to div
        div.appendChild(h3)
        div.appendChild(button)
        tasksDiv.appendChild(div)
    })
   
}
