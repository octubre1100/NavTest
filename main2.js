function noResponde() {
    alert("El sistema no responde")
}
function compra() {
    alert("datos ingresados correctamente")
}
let nissan = document.querySelector("#nissan")
let blancoBtNi = document.querySelector("#blancoNi")
let rojoBtNi = document.querySelector("#rojoNi")
let rojoImgNi = document.querySelector("#imgRojoNi")
let blancoImgNi = document.querySelector("#imgBlancoNi")
let colorRojoNi = false
let colorBlancoNi = true
rojoBtNi.onclick = function () {
    if (colorRojoNi == false) {
        nissan.src = "./imgss/nissanRojo.png"
        imgRojoNi.src = "./imgss/rojoSelect.png"
        imgBlancoNi.src = "./imgss/blanco.png"
        colorBlancoNi = false
        colorRojoNi = true
    }
}
blancoBtNi.onclick = function () {
    if (colorBlancoNi == false) {
        nissan.src = "./imgss/nissanBlanco.png"
        imgRojoNi.src = "./imgss/rojo.png"
        imgBlancoNi.src = "./imgss/blancoSelect.png"
        colorBlancoNi = true
        colorRojoNi = false
    }
}