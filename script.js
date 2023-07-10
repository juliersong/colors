const button = document.getElementById("colorButton");

button.addEventListener("click", function(e) {
    console.log("Button clicked");
    document.body.style.background = getColor();
});

function getColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log("Color = " + color);
    return color;
}