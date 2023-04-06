
const addButton = document.querySelector('.card__add');
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

// show modal window
function showModal () {
    modal.style.display = "block";
}

//  close modal window
span.addEventListener("click", function () {
    modal.style.display = "none";
});
window.addEventListener("click", function () {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// save input values in variable
let inputFirstName = document.querySelector('.input_firstname');
let inputLastName = document.querySelector('.input_lastname');
let inputFatherName = document.querySelector('.input_fathername');
let inputNumber = document.querySelector('.input_number');


function consoleInfo () {

    if (inputFirstName.value.length === 0) {
        alert('Пожалуйста, введите ваше имя');
        return
    }
    if (inputLastName.value.length === 0) {
        alert('Пожалуйста, введите вашу фамилию')
    }
    if (inputFatherName.value.length === 0) {
        alert('Пожалуйста, введите ваше отчество')
    }
    if (inputNumber.value.length === 0) {
        alert('Пожалуйста, введите ваш номер телефона')
    }
    console.log(inputFirstName.value.trim(),
        inputLastName.value.trim(),
        inputFatherName.value.trim(),
        inputNumber.value.trim())
}