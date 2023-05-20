let nameExercise = document.querySelector("#nameExercise");
let buttonNameExercise = document.querySelector("#buttonNameExercise");
let resultNameExercise = document.querySelector("#resultNameExercise");

let yourExercises = [];
let newExercise;

let checkboxTypeExercise = document.querySelectorAll(
  'input[name="typeOfExercises"]:checked'
);

let apiKey = "e2tk2aVVqC7JgZSqYZMu0w==XUAmhHQElchlx6Fi";

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
      /*resultNameExercise.innerHTML = JSON.stringify(result);
      yourExercises.push(result);
      console.log(yourExercises);*/
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

/*$.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/exercises?muscle=" + name,
    headers: { "X-Api-Key": apiKey },
    contentType: "application/json",
    success: function (result) {
      console.log(result);
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
};

  fetch("https://api.api-ninjas.com/v1/exercises?muscle=" + name)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};*/
