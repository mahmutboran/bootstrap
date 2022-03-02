const form = document.getElementById("car-form");

const resim = document.getElementById("resim");
const model = document.getElementById("model");
const yıl = document.getElementById("yıl");
const renk = document.getElementById("renk");
const km = document.getElementById("km");
const fiyat = document.getElementById("fiyat");
const submit = document.getElementById("btn");

const tbody = document.getElementById("cars")
const cardBody = document.querySelectorAll(".card-body")

form.addEventListener("submit", e => {
    if (resim.value == "" || model.value == "" || yıl.value == "" || renk.value == "" || km.value == "" || fiyat.value == "") {

        alert();
    } else {
        tbody.innerHTML += `
    <tr>
<td><img src="${resim.value}" class="img-fluid img-thumbnail"></td>
<td>${model.value}</td>
<td>${yıl.value}</td>
<td>${renk.value}</td>
<td>${km.value}</td>
<td>${fiyat.value}</td>
<td><a href="#" id = "delete-car" class = "btn btn-danger btn1">Satıldı</a></td>
</tr>
    `
        clear()

        if (cardBody[0].lastElementChild.classList.contains("alert")) {
            document.querySelector(".alert").remove();
        }

    }
    e.preventDefault();
})
/* ****************************clear******************** */
const clear = function () {
        resim.value = "",
        model.value = "",
        yıl.value = "",
        renk.value = ""
        km.value = "",
        fiyat.value = ""

}

/* ********************alert******************* */
const alert = function () {
    const div = document.createElement("div");
    div.className = "alert alert-secondary";
    div.textContent = "Eksik bilgi girdiniz";
    cardBody[0].appendChild(div);

}


/* *******************SATILDI******************** */


cardBody[1].addEventListener("click",e=>{
    if (e.target.classList.contains("btn1")){
        e.target.parentElement.parentElement.remove()
    }else if (e.target.classList.contains("btn2")){
       e.target.parentElement.children[3].children[1].remove()
    }
})


