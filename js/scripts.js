let modal = document.querySelector('.modal'),
  isModalOpen = false,
  menuItem = document.querySelectorAll('.menu-item'),
  about = document.querySelector('#about'),
  work = document.querySelector('#work'),
  mission = document.querySelector('#mission'),
  contact = document.querySelector('#contact'),


// toggle logic
function modalToggle() {
  if (!isModalOpen) {
    modal.classList.add('show');
    isModalOpen = !isModalOpen;
  } else {
    modal.classList.remove('show');
    isModalOpen = !isModalOpen;
  }
}

// modal show rules and content
menuItem.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    e.stopPropagation();
    modalToggle();
    if (elem == about) {
      modal.innerHTML = aboutContent;
    } else if (elem == work) {
      modal.innerHTML = workContent
    } else if (elem == mission) {
      modal.innerHTML = missionContent
    } else if (elem == contact) {
      modal.innerHTML = contactContent
    }
  });
})

// click to close modal
document.addEventListener('click', () => {
  if (isModalOpen) {
    modalToggle();
  }
})

// press ESC to close modal
document.addEventListener('keydown', (event => {
  if (event.key === 'Escape' && isModalOpen) {
    modal.classList.remove('show');
    isModalOpen = !isModalOpen;
  }
}))