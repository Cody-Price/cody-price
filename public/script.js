const menuBtn = document.querySelector('.display-menu-btn');
const menu = document.querySelector('.menu');
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const aboutBtn = document.querySelector('.about');
const projectsBtn = document.querySelector('.projects');
const blogBtn = document.querySelector('.blog');
const contactBtn = document.querySelector('.contact');
const content = document.querySelector('.content');

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

const changeContent = (givenContent) => {
  content.innerHTML = givenContent
}

menuBtn.addEventListener('click', toggleMenu)
aboutBtn.addEventListener('click', () => {
  changeContent(`<p>about me</p>`)
  content.setAttribute("style", "height: 1px;")
})
projectsBtn.addEventListener('click', () => {
  changeContent(`<p>projects</p>`)
})
blogBtn.addEventListener('click', () => {
  changeContent(`<p>blog</p>`)
})
contactBtn.addEventListener('click', () => {
  changeContent(`<p>contact</p>`)
})
