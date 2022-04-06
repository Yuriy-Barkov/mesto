const editButton = document.querySelector('.profile__edit-button');
const modalWindow = document.querySelector('.popup');
const modalCloseBtn = modalWindow.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__job');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const groupElement = document.querySelector('.group');

let formElement = document.querySelector('form');

nameInput.value = profileName.innerText;
jobInput.value = profileJob.innerText;

function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;


  toggleModalWindow();
}

function toggleFill(evt) {
  let el = evt.target;
  if (el.classList.contains('element__like')) {
    if (el.classList.contains('active')){
      el.setAttribute('src', 'images/like.svg');
    }
    else {
      el.setAttribute('src', 'images/Union.svg');
    }
    el.classList.toggle('active');
  }
}

formElement.addEventListener('submit', formSubmitHandler);



function toggleModalWindow() {
  modalWindow.classList.toggle('popup_opened');
}

editButton.addEventListener('click', toggleModalWindow);

modalCloseBtn.addEventListener('click', toggleModalWindow);
groupElement.addEventListener('click', toggleFill);
