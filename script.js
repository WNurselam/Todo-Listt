//İnput elementine(Ekle) tıklandığında li elementleri oluşturma
const newElement = () => {
    let li = document.createElement("li")
    let inputValue = document.getElementById("task").value
    let textnode = document.createTextNode(inputValue)
    li.appendChild(textnode)
    if (inputValue === "" || inputValue.replaceAll(" ", "") === "") { // Eğer listeye boş eleman eklenirse uyarı mesajı gelmesi
        $(".error").toast("show")
    } else {
        document.getElementById("list").appendChild(li)
        $(".success").toast("show")
        localStorage.setItem("tasks",   //Burada input içerisinde alınan veriyi local storage'e set ediyoruz
            JSON.stringify(
                [...(
                    JSON.parse(localStorage.getItem("tasks")) || []
                ), inputValue]))
    }
    document.getElementById("task").value = ""

    let span = document.createElement("SPAN")  // Listenin yanında silmemiz için bir X işareti koyma
    let text = document.createTextNode("x")   
    span.className = "close"  
    span.appendChild(text)
    li.appendChild(span)  // li tagına bağlama

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

// Atanılan local storage içerisindeki veriyi get ile alma localstorage kontrolü sağlama
if (localStorage.getItem("tasks")) {
    [...JSON.parse(localStorage.getItem("tasks"))].forEach(e => {
        let li = document.createElement("li")
        let textNode = document.createTextNode(e)
        li.appendChild(textNode)
        document.getElementById("list").appendChild(li)
    })
}

// Oluşturulan li elementine silinmesi için "X" işaretine tıklandığında liste elementi silinsin
let nodeList = document.getElementsByTagName("LI")
for (let i = 0; i < nodeList.length; i++) {
    let span = document.createElement("span")
    let text = document.createTextNode("x")
    span.className = "close"
    span.appendChild(text)  // Burada da çocuk span elemanını li elemanına ekliyoruz(çocuk eleman)
    nodeList[i].appendChild(span) 
}

// "X" işaretine tıklandığımızda tetiklenecek olan button
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
list.addEventListener(  // liste elemanına tıklandığında yapıldı şeklinde üstünün çizilmesi
    "click",
    function (ev) {
        if (ev.target.tagName === "LI") ev.target.classList.toggle("checked")
    }
)

//Tüm listeyi silmesi için tetiklenecek olan button
let btnAll = document.querySelector('#btnDeleteAll');

btnAll.addEventListener('click',(e)=>{
    
    list.innerHTML="";
})
