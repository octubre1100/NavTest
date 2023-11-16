function noResponde() {
    alert("El sistema no responde")
}
let mustang = document.querySelector("#mustang")
let blancoBt = document.querySelector("#blanco")
let rojoBt = document.querySelector("#rojo")
let celesteBt = document.querySelector("#celeste")
let celesteImg = document.querySelector("#imgCeleste")
let rojoImg = document.querySelector("#imgRojo")
let blancoImg = document.querySelector("#imgBlanco")
let colorBlanco = true
let colorRojo = false
let colorCeleste = false
rojoBt.onclick = function () {
    if (colorRojo == false) {
        mustang.src = "./imgss/mustangRojo.png"
        imgRojo.src = "./imgss/rojoSelect.png"
        imgBlanco.src = "./imgss/blanco.png"
        imgCeleste.src = "./imgss/celeste.png"
        colorBlanco = false
        colorCeleste = false
        colorRojo = true
    }
}
blancoBt.onclick = function () {
    if (colorBlanco == false) {
        mustang.src = "./imgss/mustangBlanco.png"
        imgRojo.src = "./imgss/rojo.png"
        imgBlanco.src = "./imgss/blancoSelect.png"
        imgCeleste.src = "./imgss/celeste.png"
        colorBlanco = true
        colorCeleste = false
        colorRojo = false
    }

}
celesteBt.onclick = function () {
    if (colorCeleste == false) {
        mustang.src = "./imgss/mustangCeleste.png"
        imgRojo.src = "./imgss/rojo.png"
        imgBlanco.src = "./imgss/blanco.png"
        imgCeleste.src = "./imgss/celesteSelect.png"
        colorBlanco = false
        colorCeleste = true
        colorRojo = false
    }

}