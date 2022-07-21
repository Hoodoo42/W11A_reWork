let grabString = Cookies.get(`selection`);
let chosenPlanet = JSON.parse(grabString);

// let chosenPlanet = convertJson;

let setMessage = document.getElementById(`message`);

if (chosenPlanet[`name`] === `Jupiter`) {
  setMessage[`innerHTML`] = `<h3>You chose Jupiter! Jupiter Has 67 Moons!`;
} else if (chosenPlanet[`name`] === `Saturn`) {
  setMessage[
    `innerHTML`
  ] = `<h3>You chose Saturn! A year on Saturn is more than 29 Earth years!`;
} else if (chosenPlanet[`name`] === `Pluto`) {
  setMessage[
    `innerHTML`
  ] = `<h3>You chose Pluto! Pluto has more water than earth!`;
} else {
  setMessage[
    `innerHTML`
  ] = `<h3>You chose have not chosen a planet, please go select one.`;
}

// Origianl working code for the first section of W11A

// let chosenPlanet = Cookies.get(`selection`);
// let setMessage = document.getElementById(`message`);

// if (chosenPlanet === `jupiter`) {
//   setMessage[`innerHTML`] = `<h3>You chose Jupiter! Jupiter Has 67 Moons!`;
// } else if (chosenPlanet === `saturn`) {
//   setMessage[
//     `innerHTML`
//   ] = `<h3>You chose Saturn! A year on Saturn is more than 29 Earth years!`;
// } else if (chosenPlanet === `pluto`) {
//   setMessage[
//     `innerHTML`
//   ] = `<h3>You chose Pluto! Pluto has more water than earth!`;
// }
