let container = document.querySelector(".container");
let button = document.getElementById("add");
button.addEventListener("click", addAnimal);

// DEFINED animals data
let animals = [
  {
    header: "Cheetah",
    imgSrc: "img/cheetah.jpeg",
    altText: "This is a cheetah",
  },
  {
    header: "Buffalo",
    imgSrc: "img/buffalo.jpeg",
    altText: "This is a buffalo",
  },
  {
    header: "Rhino",
    imgSrc: "img/rhino.jpeg",
    altText: "This is a rhino",
  },
  {
    header: "Elephant",
    imgSrc: "img/elephant.jpeg",
    altText: "This is an elephant",
  },
];

let index = 0;

// LOAD animals data from local storage

if (localStorage.getItem("animals")) {
  /* TODO: Display the loaded data */

  animals = JSON.parse(localStorage.getItem("animals"));

  displayAnimal();
}

// ADD current animal to the container
function addAnimal() {
  if (index >= animals.length) {
    alert("Only big 5 animals can be added to the list");
    return;
  }

  // IMPLEMENT .
  let currentAnimal = animals[index];
  let newAnimalCard = createAnimalCard(currentAnimal);
  container.append(newAnimalCard);

  /* TODO: increment index */
  index++;

  // SAVE updated animals data to the LS
  localStorage.setItem("animals", JSON.stringify(animals));
}

function displayAnimal() {
  // Display all animals

  animals.forEach((el) => {
    let newAnimalCard = createAnimalCard(el);
    container.append(newAnimalCard);
  });
}

function createAnimalCard(animals) {
  let card = document.createElement("div");
  card.classList.add("childDiv");

  let h3 = document.createElement("h3");
  h3.textContent = animals.header;

  let img = document.createElement("img");
  img.src = animals.imgSrc;
  img.alt = animals.altText;

  let description = document.createElement("p");
  description.textContent = animals.altText;

  card.append(h3, img, description);

  return card;
}
