
if (localStorage.getItem("tasks")) {
    [...JSON.parse(localStorage.getItem("tasks"))].forEach(e => {
        let li = document.createElement("li")
        let textNode = document.createTextNode(e)
        li.appendChild(textNode)
        document.getElementById("list").appendChild(li)
    })
}

let nodeList = document.getElementsByTagName("LI")
for (let i = 0; i < nodeList.length; i++) {
    let span = document.createElement("span")
    let text = document.createTextNode("x")
    span.className = "close"
    span.appendChild(text)
    nodeList[i].appendChild(span)
}




let close = document.getElementsByClassName("close")
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement
        div.style.display = "none"
        const taskList = JSON.parse(localStorage.getItem("tasks"))

        localStorage.setItem("tasks",
            JSON.stringify(
                taskList.filter(e => (
                    e !== div.innerText.slice(0, div.innerText.length - 1)))))
    }
}
let list = document.querySelector("ul")
list.addEventListener(
    "click",
    function (ev) {
        if (ev.target.tagName === "LI") ev.target.classList.toggle("checked")
    }
)

const newElement = () => {
    let li = document.createElement("li")
    let inputValue = document.getElementById("task").value
    let textnode = document.createTextNode(inputValue)
    li.appendChild(textnode)
    if (inputValue === "" || inputValue.replaceAll(" ", "") === "") {
        $(".error").toast("show")
    } else {
        document.getElementById("list").appendChild(li)
        $(".success").toast("show")
        localStorage.setItem("tasks",
            JSON.stringify(
                [...(
                    JSON.parse(localStorage.getItem("tasks")) || []
                ), inputValue]))
    }
    document.getElementById("task").value = ""

    let span = document.createElement("SPAN")
    let text = document.createTextNode("x")
    span.className = "close"
    span.appendChild(text)
    li.appendChild(span)

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement
            div.style.display = "none"
            const taskList = JSON.parse(localStorage.getItem("tasks"))
            localStorage.setItem("tasks",
                JSON.stringify(
                    taskList.filter(e => (
                        e !== div.innerText.slice(0, div.innerText.length - 1)))))
        }
    }
}

let btnAll = document.querySelector('#btnDeleteAll');

btnAll.addEventListener('click',(e)=>{
    
    list.innerHTML="";
})
