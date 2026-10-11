// Color Changer - Function:

function changeColor(color) {
    // smoothly change background color of body
    document.body.style.transition = "background-color 1s ease";

    // change backround color of body
    document.body.style.backgroundColor = color;

    // display text in custom color box 
    document.getElementById("hexCode").textContent = color;

    // saved in local storage
    localStorage.setItem("selectedColor", color);

}

// Live Custom Color Picker Function (show real-time color preview) 

function liveColorPicker(color) {
    document.body.style.transition = "none";
    document.body.style.backgroundColor = color;

    // show live selected color code
    document.getElementById("hexCode").textContent = color;

    // saved in local storage
    localStorage.setItem("selectedColor", color);
}

// Reset Color to Default - Function:

function resetColor() {
    document.body.style.transition = "background-color 1s ease";
    document.body.style.backgroundColor = "#feebff";

    // sync background and color picker to default picker state after selecting any custom color from input:
    const picker = document.getElementById("colorInput");

    if (picker) {
        picker.value = "#feebff";
    }

    document.getElementById("hexCode").textContent = "#feebff";

    // remove saved color from local storage
    localStorage.removeItem("selectedColor");
}

// at starting

window.addEventListener("DOMContentLoaded", function () {

    const savedColor = localStorage.getItem("selectedColor");

    if (savedColor) {
        document.body.style.transition = "none";
        document.body.style.backgroundColor = savedColor;
        document.getElementById("hexCode").textContent = savedColor;

        const picker = document.getElementById("colorInput");

        if (picker && savedColor.startsWith("#")) {
            picker.value = savedColor;
        }
    }
});
