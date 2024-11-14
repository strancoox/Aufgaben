window.addEventListener("load", initialize);
var ingredients;
var choice;

function initialize() {
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("remove").addEventListener("click", remove);
    ingredients = document.getElementById("ingredients");
    choice = document.getElementById("choice");
}

function add() {

    if (ingredients.selectedIndex > -1 ) {
        var selectedOption = ingredients.options[ingredients.selectedIndex];
        choice.appendChild(selectedOption);
    }
}

function remove() {
   
    if (choice.selectedIndex > -1 ) {
        var selectedOption = choice.options[choice.selectedIndex];
        ingredients.appendChild(selectedOption);
    }
}