// original working code for first part of assignemt

// let chosenPlanet = Cookies.get(`selection`);
// let setMessage = document.getElementById(`message`);

// if(chosenPlanet === `jupiter`){
//     setMessage[`innerHTML`] = `<h3>You chose Jupiter! Jupiter Has 67 Moons!`;

// }else if(chosenPlanet === `saturn`){
//     setMessage[`innerHTML`] = `<h3>You chose Saturn! A year on Saturn is more than 29 Earth years!`;

// }else if(chosenPlanet === `pluto`){
//     setMessage[`innerHTML`] = `<h3>You chose Pluto! Pluto has more water than earth!`;

// }

let chosenPlanet = Cookies.get(`selection`);
let setMessage = document.getElementById(`message`);

if (chosenPlanet === `jupiter`) {
  setMessage[`innerHTML`] = `<h3>You chose Jupiter! Jupiter Has 67 Moons!`;
} else if (chosenPlanet === `saturn`) {
  setMessage[
    `innerHTML`
  ] = `<h3>You chose Saturn! A year on Saturn is more than 29 Earth years!`;
} else if (chosenPlanet === `pluto`) {
  setMessage[
    `innerHTML`
  ] = `<h3>You chose Pluto! Pluto has more water than earth!`;
}
