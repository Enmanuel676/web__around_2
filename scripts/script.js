let edit = document.querySelector(".profile__info-link");
let page = document.querySelector(".edit");
var title = document.querySelector(".edit__profile_title");
const imageCard = document.querySelector("#image-card");
const imageShow = document.querySelector(".image__show");
const imageName = document.querySelector(".image__name");
const dudeButton = document.querySelector(".edit__dude_hidden");
let exit = document.querySelector(".edit__exit");
const main = document.querySelector(".main");
const initialCards = [
  {
    title: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    title: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    title: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    title: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    title: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    title: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

function openWindow() {
  page.classList.remove("edit");
  page.classList.add("edit__close");
  title.textContent = "Editar Perfil";
  nombre.placeholder = "Nombre";
  descripcion.placeholder = "Acerca de mi";
}

edit.addEventListener("click", openWindow);
function closeWindow() {
  page.classList.remove("edit__close");
  page.classList.add("edit");
  dudeButton.className = "edit__dude_hidden";
}
exit.addEventListener("click", closeWindow);

//  Edit Profile
const formulario = document.querySelector(".edit__profile");
let editSave = document.querySelector("#button");

//Fuction
function submitForm(a) {
  a.preventDefault();
  const names = document.querySelector(".profile__info-name");
  const description = document.querySelector(".profile__info-description");
  var nombre = document.querySelector("#name").value;
  var descripcion = document.querySelector("#description").value;
  names.textContent = `${nombre[0].toUpperCase() + nombre.slice(1)}`;
  description.textContent = `${
    descripcion[0].toUpperCase() + descripcion.slice(1)
  }`;
  page.classList.remove("edit__close");
  page.classList.add("edit");
}
formulario.addEventListener("submit", submitForm);

// Disabled Button
let nombre = document.querySelector("#name");
let descripcion = document.querySelector("#description");

//Fuction
editSave.disabled = true;
function disabledName() {
  if (nombre.value === "") {
    editSave.disabled = true;
    editSave.className = "edit__save";
  }
}

function disabledDescription() {
  if (descripcion.value === "") {
    editSave.disabled = true;
    editSave.className = "edit__save";
  } else {
    editSave.disabled = false;
    editSave.className = "edit__save_disabled";
  }
}
nombre.addEventListener("keyup", disabledName);
descripcion.addEventListener("keyup", disabledDescription);

//Initial Code for Create Cards
let addCard = document.querySelector(".profile__info_add");
const cards = document.querySelector(".add__card");
const cardExit = document.querySelector(".cards__exit");
const cardsForm = document.querySelector("#cards");
var cardsTitle = document.querySelector("#title");
var cardsLink = document.querySelector("#url");
let cardSave = document.querySelector("#save");

//Open Form
addCard.addEventListener("click", (openForm) => {
  cards.classList.remove("add__card");
  cards.classList.add("add__cards");
});

cardExit.addEventListener("click", (closeform) => {
  cards.classList.remove("add__cards");
  cards.classList.add("add__card");
});
//Add Cards
function addCards(title, url) {
  title.preventDefault();
  const cardsForm = document.querySelector("#cards");
  var cardsTitle = document.querySelector("#title");
  var cardsLink = document.querySelector("#url");
  cardsTitle.value = title;
  cardsLink.value = url;
}
function saveDisabled() {
  if (cardsTitle.value === "" || cardsLink.value === "") {
    cardSave.disabled = true;
    cardSave.className = "card__save";
  } else {
    cardSave.disabled = false;
    cardSave.className = "card__save_disabled";
  }
}

// Add event Listener
cardsTitle.addEventListener("input", saveDisabled);
cardsLink.addEventListener("input", saveDisabled);
//Create Cards
const grid = document.querySelector(".grid");
const template = document.querySelector("#template").content;

function createCards(title, link) {
  var gridCard = template.querySelector(".grid__card").cloneNode(true);
  const cardTitle = gridCard.querySelector(".grid__name");
  var cardImage = gridCard.querySelector(".grid__image");
  const cardLike = gridCard.querySelector(".grid__like");
  cardImage.addEventListener("click", function () {
    openImage(title, link);
  });

  cardLike.addEventListener("click", function () {
    cardLike.classList.toggle("grid__like_active");
  });
  cardTitle.textContent = title;
  cardImage.src = link;
  cardImage.alt = title;

  grid.append(gridCard);
  return gridCard;
}

initialCards.forEach(function (element) {
  createCards(element.title, element.link);
});

//Add Cards
cardsForm.addEventListener("submit", function (item) {
  item.preventDefault();
  const newCard = createCards(cardsTitle.value, cardsLink.value);
  grid.prepend(newCard);
});

//Delete Card
grid.addEventListener("click", function (event) {
  if (event.target.classList.contains("card__delete")) {
    const card = event.target.closest(".grid__card");
    card.remove();
  }
});
//Open Photo
function openImage(title, link) {
  imageCard.classList.remove("image__card");
  imageCard.classList.add("image__card_hidden");
  imageName.textContent = title;
  imageShow.src = link;
}

//Close Photo
const imageClose = document.querySelector(".image__close");
imageClose.addEventListener("click", function () {
  imageCard.classList.add("image__card");
});
