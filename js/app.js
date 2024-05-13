// CODE EXPLAINED channel
const clear = document.querySelector(".clear")
const dateElement = document.getElementById("date")
const list = document.getElementById("list")
const input = document.getElementById("input")

function addToDo (toDo) {
    const list = document.getElementById("list")
    const text = `
<li class="item">
    <i class="co fa fa-circle-thin" job="complete"></i>
    <p class="text">${toDo}</p>
    <i class="de fa fa-trash-o" job="delete"></i>
</li>
`
    const position = "beforeend"
    list.insertAdjacentHTML(position, text)
}

document.addEventListener("keyup",function(event){
    if(event.keyCode == 13){
        const toDo = input.value
        if(toDo){
            addToDo(toDo)
        }
        input.value = ""
    }
})