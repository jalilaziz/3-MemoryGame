// let windo = document.querySelectorAll(".window");
// windo.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     e.target.classList.toggle("active");
//   });
// });

// ***************************

// const winBefore = document.querySelector('.window::before, .window::after');
const wins = document.querySelectorAll('.window');
  wins.forEach(win=>{
    win.addEventListener('click', () => {
      win.classList.toggle('active');
      // win.classList.add('open');
    })
  });

