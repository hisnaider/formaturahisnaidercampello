const links = document.querySelectorAll("a")

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const sectionId = link.getAttribute("href")
        document.querySelector(sectionId).scrollIntoView({
            behavior: "smooth"
        })
    })
})

window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY
    links.forEach(link => {
        const sectionId = link.getAttribute("data-section")
        const section = document.getElementById(sectionId)
        if (scrollPos >= section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            link.classList.add("active")
        }
        else{
            link.classList.remove("active")
        }
    })
})

const fullscreenImage = (order) => {
    document.getElementById("overlay").innerHTML = `
        <div onclick="closeImage()">
            <img id="overlay_picture" src="./images/foto ${order}.jpg">
            <p style="position: absolute; top: 40px; background-color: transparent; color: white;">Clique/toque em qualquer parte da pagina pra fechar</p>
        </div>`
}

const closeImage = () => {
    document.getElementById("overlay").innerHTML = ""
}