const startButton = document.getElementById("startButton");
const categories = document.getElementById("categories");


startButton.addEventListener("click", () => {

    categories.classList.add("show");

    startButton.style.opacity = "0";
    startButton.style.pointerEvents = "none";

});
const launchersButton = document.getElementById("launchersButton");
const launcherOptions = document.getElementById("launcherOptions");

launchersButton.addEventListener("click", () => {
    launcherOptions.classList.add("show");
});