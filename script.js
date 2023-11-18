{/* <li class="d-flex justify-content-between align-items-center bg-info px-3 rounded-2">
    <p class="mt-3">İnputta yazılacak değer</p>
    <div class="d-flex gap-3">
    <i class="fa-solid fa-thumbs-up fa-beat"></i>
    <i class="fa-solid fa-trash fa-bounce"></i>
    </div>
</li>  */}

const input = document.getElementById("input")
const btn = document.querySelector("#btn")
const liste = document.querySelector("#liste")


function toDo() {
    const li = document.createElement("li")
    li.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'bg-warning', 'px-3', 'rounded-2')
    console.log(li)

    const p = document.createElement("p")
    p.classList.add("mt-3")
    p.innerHTML =input.ariaValueMax.trim()
    
    const iconDiv = document.createElement("div")
    iconDiv.setAttribute("class", "d-flex gap-3")

    const trash = document.createElement("i")
    trash.classList.add("fa-solid", "fa-trash", "fa-bounce")

    const okay = document.createElement("i")
    okay.setAttribute("class", "fa-solid fa-thumbs-up fa-beat")
    

}