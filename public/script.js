const menuBtn = document.querySelector('.display-menu-btn');
const menu = document.querySelector('.menu');
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const aboutBtn = document.querySelector('.about');
const projectsBtn = document.querySelector('.projects');
const blogBtn = document.querySelector('.blog');
const contactBtn = document.querySelector('.contact');
const content = document.querySelector('.content');

const aboutMeHTML = `<p>about me</p>`
const projectsHTML = `<p>projects</p>`
const blogHTML = `<p>blog</p>`
const contactHTML = `<p>contact</p>`

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

// event listeners

menuBtn.addEventListener('click', toggleMenu)

aboutBtn.addEventListener('click', () => {
  setTimeout(() => {
    content.classList.add('transition')
  }, 0);
  setTimeout(() => {
    content.classList.remove('transition')
    changeContent(aboutMeHTML)
  }, 1000);
})

projectsBtn.addEventListener('click', () => {
  setTimeout(() => {
    content.classList.add('transition')
  }, 0);
  setTimeout(() => {
    content.classList.remove('transition')
    changeContent(projectsHTML)
  }, 1000);
})

blogBtn.addEventListener('click', () => {
  setTimeout(() => {
    content.classList.add('transition')
  }, 0);
  setTimeout(() => {
    content.classList.remove('transition')
    changeContent(blogHTML)
  }, 1000);
})

contactBtn.addEventListener('click', () => {
  setTimeout(() => {
    content.classList.add('transition')
  }, 0);
  setTimeout(() => {
    content.classList.remove('transition')
    changeContent(contactHTML)
  }, 1000);
})
