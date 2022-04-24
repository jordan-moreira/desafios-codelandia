const stars = document.querySelectorAll(".stars img");

function click(index) {
    for (let i = 0; i <= index; i++) {
        stars[i].src = "imagens/starclicked.svg";

    }
}

stars.forEach((element, index) => {
    element.addEventListener("click", () => {
        click(index);
    });
});