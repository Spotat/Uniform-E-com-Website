function openNav(){
    document.getElementById("sideNav").style.width = "80%"
    document.getElementById("sideNav").style.display = "block"
    document.getElementById("sideNav").style.visibility = "visible"
}
function closeNav(){
    document.getElementById("sideNav").style.width = "0%"
    document.getElementById("sideNav").style.display = "none"
    document.getElementById("sideNav").style.visibility = "hidden"
}

function openModal() {
    document.getElementById("modal").style.opacity = "1"
    document.getElementById("modal").style.zIndex = "999"
    document.getElementById("modal").style.display = "block"
}
function closeModal() {
    document.getElementById("modal").style.opacity = "0"
    document.getElementById("modal").style.zIndex = "-999"
    document.getElementById("modal").style.display = "none"
}