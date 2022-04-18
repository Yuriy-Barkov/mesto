const editButton = document.querySelector('.profile__edit-button'),
  modalWindow = document.querySelector('.popup'),
  modalCloseBtn = modalWindow.querySelector('.popup__close'),
  nameInput = document.querySelector('.popup__profile_name'),
  jobInput = document.querySelector('.popup__profile_job'),
  profileName = document.querySelector('.profile__name'),
  profileJob = document.querySelector('.profile__job');

let formElement = document.querySelector('form');

function formSubmitHandler (event) {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  toggleModalWindow();
}

formElement.addEventListener('submit', formSubmitHandler);

function toggleModalWindow() {
  modalWindow.classList.toggle('popup_opened');
  if(modalWindow.classList.contains('popup_opened')) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    nameInput.focus();
  }
}

editButton.addEventListener('click', toggleModalWindow);
modalCloseBtn.addEventListener('click', toggleModalWindow)
