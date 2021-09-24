let burgerBtn = document.getElementById('toggle');
let showcase = document.getElementById('showcase');

// Event Listeners function
eventListenerFunctions();

function eventListenerFunctions(){
    // Active burger menu
    burgerBtn.addEventListener('click', burgerActive);

}

// Function give active burger menu
function burgerActive(){
    burgerBtn.classList.toggle('active');
    showcase.classList.toggle('active');
}

