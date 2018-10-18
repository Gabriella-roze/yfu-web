const menu = document.querySelector("#menu");
const ul = document.querySelector("ul");
const container = document.querySelector("#menu");

container.addEventListener("click", myFunction);

function myFunction(e) {

    this.parentElement.classList.toggle("change");
    menu.classList.toggle("expand");
    ul.classList.toggle("appear");
}
