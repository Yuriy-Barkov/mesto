const editButton = document.querySelector(".profile__edit-button"),
  modalWindow = document.querySelector(".popup"),
  modalCloseBtn = modalWindow.querySelector(".popup__close"),
  nameInput = document.querySelector(".popup__profile_input_name"),
  jobInput = document.querySelector(".popup__profile_input_job"),
  profileName = document.querySelector(".profile__name"),
  profileJob = document.querySelector(".profile__job"),
  groupElement = document.querySelector(".group"),
  addButton = document.querySelector(".profile__add-button"),
  imageCloseBtn = document.querySelector(".image-popup__close"),
  imageTitle = document.querySelector(".image-popup__title"),
  imageImg = document.querySelector(".image-popup__mask"),
  imagePopup = document.querySelector(".image-popup");

let imgimgimg = '';
let tititle = '';
let formElement = document.querySelector(".popup__form");

document.addEventListener("DOMContentLoaded", () => {
  addCards();
});

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

let addElement = (name, link, index) => {
  let div = document.createElement("div");
  let h2 = document.createElement("h2");
  let img = document.createElement("img");
  let like = document.createElement("button");
  let trash = document.createElement("button");
  div.classList.add("element");
  h2.textContent = name;
  h2.classList.add("element__title");
  img.classList.add("element__mask");
  img.src = link;
  img.alt = name;
  like.classList.add("element__like");
  like.type = 'button';
  trash.classList.add("element__trash");
  trash.type = 'button';
  trash.id = index;
  div.append(h2);
  div.append(img);
  div.append(like);
  div.append(trash);
  groupElement.append(div);
};

function addCards() {
  groupElement.textContent = '';
  initialCards.forEach(function (item, index) {
    addElement(item.name, item.link, index);
  });
}

function addObject() {
  initialCards.unshift({
    name: nameInput.value,
    link: jobInput.value
  });
  addCards();
}

function removeObject(index) {
  initialCards.splice(index, 1);
}

function formSubmitHandler(event) {
  event.preventDefault();
  let btn = modalWindow.querySelector(".popup__save");
  if (btn.classList.contains("edit")) {
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
  }
  else {
    addObject();
  }
  toggleModalWindow();
}

function toggleModalWindow(type = 'edit') {
  modalWindow.classList.toggle("popup_opened");
  if (modalWindow.classList.contains("popup_opened")) {
    let btn = modalWindow.querySelector(".popup__save");
    if (type === 'edit') {
      modalWindow.querySelector(".popup__title").textContent = 'Редактировать профиль';
      nameInput.value = profileName.textContent;
      jobInput.value = profileJob.textContent;
      nameInput.placeholder = '';
      jobInput.placeholder = '';
      btn.classList.remove('add');
    } else if (type === 'add') {
      modalWindow.querySelector(".popup__title").textContent = 'Новое место';
      nameInput.value = '';
      nameInput.placeholder = "Название";
      jobInput.value = '';
      jobInput.placeholder = "Ссылка на картинку";
      btn.classList.remove('edit');
    }
    nameInput.focus();
    btn.classList.add(type);
  }
}

function toggleImagePopup() {
  imagePopup.classList.toggle("image-popup_opened");
  if (imagePopup.classList.contains("image-popup_opened")) {
    imagePopup.querySelector(".image-popup__mask").src = imgimgimg;
    imagePopup.querySelector(".image-popup__title").textContent = tititle;
  }
}

function toggleFill(evt) {
  let el = evt.target;
  if (el.classList.contains("element__like")) {
    el.classList.toggle("element__like_active");
  }
  if (el.classList.contains("element__trash")) {
    removeObject(el.id);
    addCards();
  }
  if (el.classList.contains("element__mask")) {
    imgimgimg = el.src;
    tititle = el.alt;
    toggleImagePopup();
  }
}

formElement.addEventListener("submit", formSubmitHandler);
editButton.addEventListener("click", toggleModalWindow.bind(this, 'edit'));
modalCloseBtn.addEventListener("click", () => toggleModalWindow('close'));
groupElement.addEventListener("click", toggleFill);
addButton.addEventListener("click", toggleModalWindow.bind(this, 'add'));
imageCloseBtn.addEventListener("click", toggleImagePopup);
