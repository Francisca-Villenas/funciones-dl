const colorOne = document.querySelector("#colorOne");
const colorTwo = document.querySelector("#colorTwo");
const colorThree = document.querySelector("#colorThree");
const colorFour = document.querySelector("#colorFour");
const allColors = document.querySelector("#container");

colorOne.style.backgroundColor = "#0D92B9";
colorTwo.style.backgroundColor = "#9EE8D3";
colorThree.style.backgroundColor = "#B29EE8";
colorFour.style.backgroundColor = "#BA69E5";


addEventListener('keydown', function (event) 
{ if (event.key === 'a') {
    colorOne.style.backgroundColor = "#0565C0";
    colorTwo.style.backgroundColor = "#0565C0";
    colorThree.style.backgroundColor = "#0565C0";
    colorFour.style.backgroundColor = "#0565C0";


} else if (event.key === 's') { 
    colorOne.style.backgroundColor = "#C4CAD0";
    colorTwo.style.backgroundColor = "#C4CAD0";
    colorThree.style.backgroundColor = "#C4CAD0";
    colorFour.style.backgroundColor = "#C4CAD0";

} else if (event.key === 'd') {
    colorOne.style.backgroundColor = "#A1B0F1";
    colorTwo.style.backgroundColor = "#A1B0F1";
    colorThree.style.backgroundColor = "#A1B0F1";
    colorFour.style.backgroundColor = "#A1B0F1";
}
})

allColors.addEventListener("click", () => {
    colorOne.style.backgroundColor = "#0D92B9";
    colorTwo.style.backgroundColor = "#9EE8D3";
    colorThree.style.backgroundColor = "#B29EE8";
    colorFour.style.backgroundColor = "#BA69E5";
})
