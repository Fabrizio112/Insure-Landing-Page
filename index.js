const $MENU = document.querySelector("#menu");
const $CRUZ = document.querySelector("#cruz")

$MENU.addEventListener("click", () => {
    $MENU.style.display = "none";
    $CRUZ.style.display = "inline-block"
    let menuParteInferior = document.querySelector("#navbar-right");
    menuParteInferior.style.display = "flex";
})
$CRUZ.addEventListener("click", () => {
    $MENU.style.display = "inline-block";
    $CRUZ.style.display = "none"
    let menuParteInferior = document.querySelector("#navbar-right");
    menuParteInferior.style.display = "none"
})