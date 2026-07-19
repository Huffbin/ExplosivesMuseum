const startButton = document.getElementById("startButton");
const categories = document.getElementById("categories");

const launchersButton = document.getElementById("launchersButton");
const bombsButton = document.getElementById("bombsButton");
const launcherOptions = document.getElementById("launcherOptions");

startButton.addEventListener("click", () => {

    categories.classList.add("show");

    startButton.style.opacity = "0";
    startButton.style.pointerEvents = "none";

});

launchersButton.addEventListener("click", () => {

    launcherOptions.classList.toggle("show");

    if (launcherOptions.classList.contains("show")) {

        bombsButton.classList.add("hidden");
        launchersButton.classList.add("active");

    } else {

        bombsButton.classList.remove("hidden");
        launchersButton.classList.remove("active");

    }

});