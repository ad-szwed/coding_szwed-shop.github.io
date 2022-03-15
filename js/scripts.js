let modal = document.querySelector('.modal'),
  modalTitle = document.querySelector('.modal h1'),
  modalBody = document.querySelector('.modal p'),
  isModalOpen = false,
  background = document.querySelector('.menu-container'),
  body = document.body,
  // menu items: 
  menuItem = document.querySelectorAll('.menu-item'),
  hoverAudio = new Audio("./audio/hover.mp3"),
  soundOpen = new Audio("audio/modalOpen.wav"),
  soundClose = new Audio("audio/modalClose.mp3");

// DATA STRUCTURE
let modalContent = {
  'about': {
    'title': 'about me',
    'content': "My name is Adam and I have a difficult to prenaunce surname. It suppose to sound like 'shveh-dah', but It's usually prenounced as sweat-ah. I got so used to this misprenaunceation, that I turned it into my pesonal brand - szwed-shop. Coding szwed-shop"
  },
  'work': {
    'title': 'My Work',
    'content': 'WORKLorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem suscipit officia excepturi aut labore maxime voluptatibus, eum aspernatur cupiditate nesciunt debitis earum dolore corrupti iste itaque obcaecati optio quidem dolor laboriosam minima veniam voluptate animi perspiciatis. Facilis eveniet mollitia ipsum corrupti officiis explicabo sapiente porro perferendis ad molestiae distinctio ipsa temporibus numquam deserunt quia est sed eius optio, iusto ex dolorum? Dolores rem voluptatum qui aut quaerat ipsam provident eveniet corrupti eos vel minima beatae, molestiae, necessitatibus nobis officiis error modi praesentium repellat quibusdam sed, cupiditate corporis aperiam. Rerum quos maiores quis, iusto fugiat amet odio eius dolor ullam. Asperiores.'
  },
  'contact': {
    'title': 'Contact me',
    'content': '<a href="mailto:someone@yoursite.com">E-mail me!</a>'
  },
  'mission': {
    'title': 'My Mission',
    'content': 'MISSIONLorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem suscipit officia excepturi aut labore maxime voluptatibus, eum aspernatur cupiditate nesciunt debitis earum dolore corrupti iste itaque obcaecati optio quidem dolor laboriosam minima veniam voluptate animi perspiciatis. Facilis eveniet mollitia ipsum corrupti officiis explicabo sapiente porro perferendis ad molestiae distinctio ipsa temporibus numquam deserunt quia est sed eius optio, iusto ex dolorum? Dolores rem voluptatum qui aut quaerat ipsam provident eveniet corrupti eos vel minima beatae, molestiae, necessitatibus nobis officiis error modi praesentium repellat quibusdam sed, cupiditate corporis aperiam. Rerum quos maiores quis, iusto fugiat amet odio eius dolor ullam. Asperiores.'
  }
}

// sounds rules
function tone(sound, toggle) {
  if (toggle) {
    // cloneNode(true) before .play() makes it possible to play it multiple times at once!
    sound.cloneNode(true).play()
  } else {
    sound.play()
  }
}

// toggle modal logic
function modalToggle() {
  if (!isModalOpen) {
    modal.classList.add('show');
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

  // sounds on hover
  elem.addEventListener('mouseenter', function () {
    hoverAudio.cloneNode(true).play(); // cloneNode(true) before .play() makes it possible to play it multiple times at once!
  })

  // content on click
  elem.addEventListener('click', (e) => {
    e.stopPropagation();
    modalToggle();
    let target = e.target.getAttribute('id');
    modalTitle.innerHTML = modalContent[target].title;
    modalBody.innerHTML = modalContent[target].content;
    tone(soundOpen, true)
  });
})

// click to close modal
document.addEventListener('click', () => {
  if (isModalOpen) {
    modalToggle();
    tone(soundClose, true);
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
