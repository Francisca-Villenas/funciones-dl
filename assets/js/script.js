const element = document.querySelector("#ele1");
element.style.backgroundColor = "green";

const pintar = function (ele, color) {
    ele.style.backgroundColor = color;
}

element.addEventListener("click", () => pintar(element, "yellow"));






