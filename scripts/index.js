const editButton = document.querySelector('.profile__edit-button'),
  modalWindow = document.querySelector('.popup'),
  modalCloseBtn = modalWindow.querySelector('.popup__close'),
  nameInput = document.querySelector('.popup__name'),
  jobInput = document.querySelector('.popup__job'),
  profileName = document.querySelector('.profile__name'),
  profileJob = document.querySelector('.profile__job'),
  groupElement = document.querySelector('.group');

let formElement = document.querySelector('form');

nameInput.value = profileName.innerText;
jobInput.value = profileJob.innerText;

function formSubmitHandler (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  toggleModalWindow();
}

function toggleFill(event) {
  let el = event.target;
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
  nameInput.focus();
}

editButton.addEventListener('click', toggleModalWindow);
modalCloseBtn.addEventListener('click', toggleModalWindow);
groupElement.addEventListener('click', toggleFill);
