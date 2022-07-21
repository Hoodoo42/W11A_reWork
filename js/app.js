function jupiterSelection(details) {
  let chooseJupiter = {
    name: `Jupiter`,
    radius: `69,911 km`,
    ranking: 5,
    isBiggerThanEarth: true,
  };

  // I need a variable to store the stringd object
  // let jupiterJson is the variable storing the stringd object.
  // JSON.stringify is the function turning the chooseJupiter object into a string.
  let jupiterJson = JSON.stringify(chooseJupiter);
  // I now need to save the newly stringd object into a cookie
  // I named the cookie selection to keep the same cookie.get flow
  // the cookie value is the variable holding the stringd version of the object.
  Cookies.set(`selection`, jupiterJson);
  // this line will take user to the selection page
  location.href = `selection.html`;
}

function saturnSelection(details) {
  let chooseSaturn = {
    name: `Saturn`,
    radius: `58,232 km`,
    ranking: 6,
    isBiggerThanEarth: true,
  };

  let saturnJson = JSON.stringify(chooseSaturn);

  Cookies.set(`selection`, saturnJson);
  location.href = `selection.html`;
}

function plutoSelection(details) {
  let choosePluto = {
    name: `Pluto`,
    radius: `1,188.3 km`,
    ranking: 9,
    isBiggerThanEarth: false,
  };

  let plutoJson = JSON.stringify(choosePluto);
  Cookies.set(`selection`, plutoJson);
  location.href = `selection.html`;
}

let jupiter = document.getElementById(`planetOne`);
jupiter.addEventListener(`click`, jupiterSelection);

let saturn = document.getElementById(`planetTwo`);
saturn.addEventListener(`click`, saturnSelection);

let pluto = document.getElementById(`planetThree`);
pluto.addEventListener(`click`, plutoSelection);

// Orignal working code for the first section of W11A

// This function is saving the string `jupiter` which holds the button and its eventLister -into a cookie

// function jupiterSelection(details) {
//     Cookies.set(`selection`, `jupiter`);
//     location.href = `selection.html`;
//   }

//   function saturnSelection(details) {
//     Cookies.set(`selection`, `saturn`);
//     location.href = `selection.html`;
//   }

//   function plutoSelection(details) {
//     Cookies.set(`selection`, `pluto`);
//     location.href = `selection.html`;
//   }

//   let jupiter = document.getElementById(`planetOne`);
//   jupiter.addEventListener(`click`, jupiterSelection);

//   let saturn = document.getElementById(`planetTwo`);
//   saturn.addEventListener(`click`, saturnSelection);

//   let pluto = document.getElementById(`planetThree`);
//   pluto.addEventListener(`click`, plutoSelection);
