let nameExercise = document.querySelector("#nameExercise");
let buttonNameExercise = document.querySelector("#buttonNameExercise");
let resultNameExercise = document.querySelector("#resultNameExercise");

let buttonAllParametersCheckerExercises = document.querySelector(
  "#buttonAllParametersCheckerExercises"
);

let checkboxTypeExercise = document.querySelectorAll(
  'input[name="typeOfExercises"]:checked'
);

let apiKey = "e2tk2aVVqC7JgZSqYZMu0w==XUAmhHQElchlx6Fi";

// Get Exercises For The Input from Searchbar

const fetchExerciseByName = () => {
  let name = `${nameExercise.value}`;

  fetch("https://api.api-ninjas.com/v1/exercises?muscle=" + `${name}`, {
    headers: { "X-Api-Key": apiKey },
    contentType: "application/json",
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      result.map((value) => {
        for (let property in value) {
          let cardArticle = document.createElement("article");
          cardArticle.innerHTML = `
                              <div class="exerciseCard">
                                <h4 class="nameExercise">${value.name}</h4>
                                <p class="typeExercise">${value.type}</p>
                                <p class="muscleExercise">${value.muscle}</p>
                                <p class="equipmentExercise">${value.equipment}</p>
                                <p class="difficultyExercise">${value.difficulty}</p>
                                <p class="instructionsExercise">${value.instructions}</p>
                              </div> 
                              <button class="info-button">+ info</button>`;

          document
            .querySelector("#resultNameExercise")
            .appendChild(cardArticle);

          return `${property}: ${value[property]}`;
        }
      });
    })

    .catch((error) => console.log(error));
};

buttonNameExerciseHandler = (event) => {
  event.preventDefault();
  fetchExerciseByName();
};

buttonNameExercise.addEventListener("click", buttonNameExerciseHandler);

// Get Exercises For The Input Checkbox Values

const fetchExerciseByAllCheckboxes = () => {
  //Declare variables for checked checkboxes

  let checkboxesTypeOfDifficulty = document.querySelectorAll(
    'input[name="typeOfDifficulty"]:checked'
  );
  let checkboxesTypeOfMussles = document.querySelectorAll(
    'input[name="typeOfMussles"]:checked'
  );
  let checkboxesTypeOfExercises = document.querySelectorAll(
    'input[name="typeOfExercises"]:checked'
  );

  //Made 3 arrays of checked checkboxes values

  let valuesTypeOfDifficulty = [];
  checkboxesTypeOfDifficulty.forEach((checkbox) => {
    valuesTypeOfDifficulty.push(checkbox.value);
  });
  console.log(valuesTypeOfDifficulty);

  // receiving the values without pushing to the array
  /*
  checkboxesTypeOfDifficulty.forEach((checkbox) => {
    console.log(checkbox.value);
  });*/

  let valuesTypeOfMussles = [];
  checkboxesTypeOfMussles.forEach((checkbox) => {
    valuesTypeOfMussles.push(checkbox.value);
  });
  console.log(valuesTypeOfMussles);

  let valuesTypeOfExercises = [];
  checkboxesTypeOfExercises.forEach((checkbox) => {
    valuesTypeOfExercises.push(checkbox.value);
  });
  console.log(valuesTypeOfExercises);
};

//fetch the data for values from 3 arrays from API

// Handle the button after the checkboxes were completed

buttonAllParametersCheckerExercisesHandler = (event) => {
  event.preventDefault();
  fetchExerciseByAllCheckboxes();
};

// Add eventlistener

buttonAllParametersCheckerExercises.addEventListener(
  "click",
  buttonAllParametersCheckerExercisesHandler
);
/*
const btn = document.querySelector('#btn');
        btn.addEventListener('click', (event) => {
            let checkboxes = document.querySelectorAll('input[name="color"]:checked');
            let values = [];
            checkboxes.forEach((checkbox) => {
                values.push(checkbox.value);
            });
            alert(values);
        });    

        const cb = document.querySelector('#accept');
        const btn = document.querySelector('#btn');
        btn.onclick = () => {
           alert(cb.value);
        };
*/

/*
const fetchExerciseByName = () => {
  let name = "biceps"; /*nameExercise.value;
  fetch("https://api.api-ninjas.com/v1/exercises?muscle=" + `${name}`, {
    headers: { "X-Api-Key": apiKey },
    contentType: "application/json",
  })
    .then((res) => res.json())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};
fetchExerciseByName();*/

// Create Exersise Card

/*let cardExercise = (
  name,
  type,
  muscle,
  equipment,
  difficulty,
  instructions
) => {
  this.name = name;
  this.type = type;
  this.muscle = muscle;
  this.equipment = equipment;
  this.difficulty = difficulty;
  this.instructions = instructions;
};
cardExercise.prototype.read = false; */
