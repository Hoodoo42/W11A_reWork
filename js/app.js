// original working code from first part of assignment.

// function jupiterSelection(details){
//     Cookies.set(`selection`, `jupiter`);
//     location.href = `selection.html`
// };

// function saturnSelection(details){
//     Cookies.set(`selection`, `saturn`);
//     location.href = `selection.html`
// };

// function plutoSelection(details){
//     Cookies.set(`selection`, `pluto`);
//     location.href = `selection.html`
// };

// let jupiter = document.getElementById(`planetOne`);
// jupiter.addEventListener(`click`, jupiterSelection)

// let saturn = document.getElementById(`planetTwo`);
// saturn.addEventListener(`click`, saturnSelection)

// let pluto = document.getElementById(`planetThree`);
// pluto.addEventListener(`click`, plutoSelection)

function jupiterSelection(details) {
  Cookies.set(`selection`, `jupiter`);
  location.href = `selection.html`;
}

function saturnSelection(details) {
  Cookies.set(`selection`, `saturn`);
  location.href = `selection.html`;
}

function plutoSelection(details) {
  Cookies.set(`selection`, `pluto`);
  location.href = `selection.html`;
}

let jupiter = document.getElementById(`planetOne`);
jupiter.addEventListener(`click`, jupiterSelection);

let saturn = document.getElementById(`planetTwo`);
saturn.addEventListener(`click`, saturnSelection);

let pluto = document.getElementById(`planetThree`);
pluto.addEventListener(`click`, plutoSelection);
