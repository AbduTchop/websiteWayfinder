const setup = () => {
    let menuChoice = document.getElementById("menu").value;
    let pad = ["h1.1", "h2.2","h3.3", "forum"];

    const updateMenu = () => {
        menuChoice = document.getElementById("menu").value;
        fotoKader.setAttribute("src","#" + menuChoice)
    }

    const padVolgende = () => {
        fotoKader.setAttribute("src","#" + pad[0])
    }

    let volgendeButton = document.getElementById("volgendeButton");
    let vorigeButton = document.getElementById("vorigeButton");
    let fotoKader = document.getElementById("image-360");
    let menuveld = document.getElementById("menu");
    menuveld.addEventListener("change", updateMenu);
    volgendeButton.addEventListener("change", padVolgende);
}

window.addEventListener("load", setup);