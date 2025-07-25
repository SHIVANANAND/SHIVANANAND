function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector("#nav-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const date = new Date()
const year = date.getFullYear()
document.querySelector("#footer").innerHTML = "Copyright &#169; " + year + " Shivan Anand. All Rights Reserved."