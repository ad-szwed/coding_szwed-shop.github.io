// $(function() {
//   $('.menu').click(function() {
//     $('.menu').toggleClass('big');
//   });
// });

// $( ".menu" ).click(function() {
//   alert( "Handler for .click() called." );
// });
// function enlarge() {
// document.classList.add
// }
// about contact mission work

// about enlarge
let about = document.getElementById('about');
about.addEventListener('click', (e) => {
  about.classList.toggle('big');
});

let contact = document.getElementById('contact');
contact.addEventListener('click', (e) => {
  contact.classList.toggle('big');
});

let mission = document.getElementById('mission');
mission.addEventListener('click', (e) => {
  mission.classList.toggle('big');
});

let work = document.getElementById('work');
work.addEventListener('click', (e) => {
  work.classList.toggle('big');
});
