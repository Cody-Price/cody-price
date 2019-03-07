const menuBtn = document.querySelector('.display-menu-btn');
const menu = document.querySelector('.menu');
const main = document.querySelector('.main');
const header = document.querySelector('.header');

const toggleMenu = () => {
  if (menu.classList.contains('displayed')) {
    menu.classList.add('not-displayed')
    menu.classList.remove('displayed')
    main.setAttribute("style", "width: 100vw; left: 0px; transition: 0.3s;")
    header.setAttribute("style", "width: 100vw; left: 0px; transition: 0.3s;")
  } else {
    setTimeout(() => {
      menu.classList.remove('not-displayed')
      menu.classList.add('displayed')
    }, 300);
    main.setAttribute("style", "width: 85vw; left: 15vw; transition: 0.3s;")
    header.setAttribute("style", "width: 85vw; left: 15vw; transition: 0.3s;")
  }
}

menuBtn.addEventListener('click', toggleMenu)