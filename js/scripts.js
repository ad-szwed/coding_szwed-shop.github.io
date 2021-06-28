let modal = document.querySelector('.modal'),
  isModalOpen = false,
  menuItem = document.querySelectorAll('.menu-item');

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