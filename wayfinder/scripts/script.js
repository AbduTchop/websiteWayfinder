const setup = () => {
    let menuChoice = document.getElementById("menu").value;
    let pad = ["h1.1", "h2.2","h3.3", "forum"];
    let index = 0;

    const updateMenu = () => {
        menuChoice = document.getElementById("menu").value;
        fotoKader.setAttribute("src","#" + menuChoice)
    }

    const padStart = () => {
        fotoKader.setAttribute("src","#" + pad[0])
    }

    const padVolgende = () => {
        if (index !== pad.length -1) {
            index++;
        }
        fotoKader.setAttribute("src","#" + pad[index])
    }

    const padVorige = () => {
        if (index !== 0) {
            index--;
        }
        fotoKader.setAttribute("src","#" + pad[index])
    }

    let volgendeButton = document.getElementById("volgendeButton");
    let vorigeButton = document.getElementById("vorigeButton");
    let startButton = document.getElementById("startButton");
    let fotoKader = document.getElementById("image-360");
    let menuveld = document.getElementById("menu");
    menuveld.addEventListener("change", updateMenu);
    startButton.addEventListener("click", padStart);
    volgendeButton.addEventListener("click", padVolgende);
    vorigeButton.addEventListener("click", padVorige);
}

window.addEventListener("load", setup);