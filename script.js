let container = document.querySelector(".container");
let button = document.getElementById("add");

let card = document.createElement("div");
card.classList.add("childDiv");

let headers = ["Cheetah", "Buffalo", "Rhino"];
let animals = ["img/cheetah.jpeg", "img/buffalo.jpeg", "img/rhino.jpeg"];
let text = ["This is a cheetah", "This is a buffalo", "This is a rhino"];

let index = 0;

button.addEventListener("click", addAnimal);

function addAnimal() {
  let newCard = card.cloneNode(true);

  let h3 = document.createElement("h3");
  h3.textContent = headers[index];

  let img = document.createElement("img");
  img.src = animals[index];
  img.alt = "animal";

  let description = document.createElement("p");
  description.textContent = text[index];

  newCard.append(h3, img, description);
  container.append(newCard);

  index = (index + 1) % headers.length;
}
