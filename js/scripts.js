let modal = document.querySelector('.modal'),
  modalTitle = document.querySelector('.modal h1'),
  modalBody = document.querySelector('.modal p'),
  isModalOpen = false,
  background = document.querySelector('.menu-container'),
  // menu items: 
  menuItem = document.querySelectorAll('.menu-item');

// DATA STRUCTURE
let modalContent = {
  'about': {
    'title': 'about me',
    'content': 'ABOUTLorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem suscipit officia excepturi aut labore maxime voluptatibus, eum aspernatur cupiditate nesciunt debitis earum dolore corrupti iste itaque obcaecati optio quidem dolor laboriosam minima veniam voluptate animi perspiciatis. Facilis eveniet mollitia ipsum corrupti officiis explicabo sapiente porro perferendis ad molestiae distinctio ipsa temporibus numquam deserunt quia est sed eius optio, iusto ex dolorum? Dolores rem voluptatum qui aut quaerat ipsam provident eveniet corrupti eos vel minima beatae, molestiae, necessitatibus nobis officiis error modi praesentium repellat quibusdam sed, cupiditate corporis aperiam. Rerum quos maiores quis, iusto fugiat amet odio eius dolor ullam. Asperiores.'
  },
  'work': {
    'title': 'My Work',
    'content': 'WORKLorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem suscipit officia excepturi aut labore maxime voluptatibus, eum aspernatur cupiditate nesciunt debitis earum dolore corrupti iste itaque obcaecati optio quidem dolor laboriosam minima veniam voluptate animi perspiciatis. Facilis eveniet mollitia ipsum corrupti officiis explicabo sapiente porro perferendis ad molestiae distinctio ipsa temporibus numquam deserunt quia est sed eius optio, iusto ex dolorum? Dolores rem voluptatum qui aut quaerat ipsam provident eveniet corrupti eos vel minima beatae, molestiae, necessitatibus nobis officiis error modi praesentium repellat quibusdam sed, cupiditate corporis aperiam. Rerum quos maiores quis, iusto fugiat amet odio eius dolor ullam. Asperiores.'
  },
  'contact': {
    'title': 'Contact me',
    'content': 'CONTACTLorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem suscipit officia excepturi aut labore maxime voluptatibus, eum aspernatur cupiditate nesciunt debitis earum dolore corrupti iste itaque obcaecati optio quidem dolor laboriosam minima veniam voluptate animi perspiciatis. Facilis eveniet mollitia ipsum corrupti officiis explicabo sapiente porro perferendis ad molestiae distinctio ipsa temporibus numquam deserunt quia est sed eius optio, iusto ex dolorum? Dolores rem voluptatum qui aut quaerat ipsam provident eveniet corrupti eos vel minima beatae, molestiae, necessitatibus nobis officiis error modi praesentium repellat quibusdam sed, cupiditate corporis aperiam. Rerum quos maiores quis, iusto fugiat amet odio eius dolor ullam. Asperiores.'
  },
  'mission': {
    'title': 'My Mission',
    'content': 'MISSIONLorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem suscipit officia excepturi aut labore maxime voluptatibus, eum aspernatur cupiditate nesciunt debitis earum dolore corrupti iste itaque obcaecati optio quidem dolor laboriosam minima veniam voluptate animi perspiciatis. Facilis eveniet mollitia ipsum corrupti officiis explicabo sapiente porro perferendis ad molestiae distinctio ipsa temporibus numquam deserunt quia est sed eius optio, iusto ex dolorum? Dolores rem voluptatum qui aut quaerat ipsam provident eveniet corrupti eos vel minima beatae, molestiae, necessitatibus nobis officiis error modi praesentium repellat quibusdam sed, cupiditate corporis aperiam. Rerum quos maiores quis, iusto fugiat amet odio eius dolor ullam. Asperiores.'
  }
}



// toggle modal logic
function modalToggle() {
  if (!isModalOpen) {
    modal.classList.add('show');
    console.log(background.classList)
    background.classList.add('dim');
    isModalOpen = !isModalOpen;
  } else {
    modal.classList.remove('show');
    background.classList.remove('dim')
    isModalOpen = !isModalOpen;
  }
}

// modal show rules and content
menuItem.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    e.stopPropagation();
    modalToggle();
    console.log(elem, '!!elem');
    let target = e.target.getAttribute('id');
    console.log(target, '!!target');
    console.log(modalContent[target]);
    modalTitle.innerHTML = modalContent[target].title;
    modalBody.innerHTML = modalContent[target].content;


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

// ===================================*  ACTUAL CONTENT FOR MODALS  *========================================

// ABOUT
