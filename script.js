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



}