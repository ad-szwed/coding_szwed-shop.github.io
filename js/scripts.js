let modal = document.querySelector('.modal'),
  isModalOpen = false,
  menuItem = document.querySelectorAll('.menu-item'),
  about = document.querySelector('#about'),
  work = document.querySelector('#work'),
  mission = document.querySelector('#mission'),
  contact = document.querySelector('#contact');

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
      console.log("contains about!", elem);
      modal.innerHTML = ('no way, it works for about!')
    } else if (elem == work) {
      console.log("contains work!", elem);
      modal.innerHTML = ('no way, it works for work!')
    } else if (elem == mission) {
      console.log("contains mission!", elem);
      modal.innerHTML = ('no way, it works for mission!')
    } else if (elem == contact) {
      console.log("contains contact!", elem);
      modal.innerHTML = ('no way, it works for contact!')
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