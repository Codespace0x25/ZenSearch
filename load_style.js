const img = document.getElementById("logo")
const date = new Date();
const body = document.getElementById("body")
const mun = date.getMonth()


function prid() {
    img.src = "Pride_Icon.png"}
function runt() {
    img.src = "Icon.png"
}
console.log(mun);
if (mun == 5) {
    prid()
} else {
    runt()
}