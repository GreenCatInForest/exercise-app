let nameExercise = document.querySelector("#nameExercise");
let buttonNameExercise = document.querySelector("#buttonNameExercise");
let apiKey = "e2tk2aVVqC7JgZSqYZMu0w==XUAmhHQElchlx6Fi";

let yourExerciseArray = [];

const fetchExerciseByName = () => {
  let name = `${nameExercise.value}`;

  fetch("https://api.api-ninjas.com/v1/exercises?muscle=" + `${name}`, {
    headers: { "X-Api-Key": apiKey },
    contentType: "application/json",
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      yourExerciseArray.push(result);
      console.log(yourExerciseArray);
    })

    .catch((error) => console.log(error));
};

buttonNameExerciseHandler = (event) => {
  event.preventDefault();
  fetchExerciseByName();
};

buttonNameExercise.addEventListener("click", buttonNameExerciseHandler);

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
