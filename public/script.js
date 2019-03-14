// query selectors

const menuBtn = document.querySelector('.display-menu-btn');
const menu = document.querySelector('.menu');
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const headerTitle = document.querySelector('.header-title');
const aboutBtn = document.querySelector('.about');
const projectsBtn = document.querySelector('.projects');
const blogBtn = document.querySelector('.blog');
const contactBtn = document.querySelector('.contact');
const content = document.querySelector('.content');

// dynamic content

const aboutMeHTML = `<p>about me</p>`
const projectsHTML = `<p>projects</p>`
const blogHTML = `<p>blog</p>`
const contactHTML = `<p>contact</p>`

// functional code

const animateMenuButtonsIn = () => {
  setTimeout(() => {
    contactBtn.classList.add('rotate-in')
  }, 400);
  setTimeout(() => {
    blogBtn.classList.add('rotate-in')
  }, 600);
  setTimeout(() => {
    projectsBtn.classList.add('rotate-in')
  }, 800);
  setTimeout(() => {
    aboutBtn.classList.add('rotate-in')
  }, 1000);
}

const resetMenuBtns = () => {
  aboutBtn.classList.remove('rotate-in')
  projectsBtn.classList.remove('rotate-in')
  blogBtn.classList.remove('rotate-in')
  contactBtn.classList.remove('rotate-in')
}

const toggleMenu = () => {
  if (menu.classList.contains('displayed')) {
    menu.classList.add('not-displayed')
    menu.classList.remove('displayed')
    content.setAttribute("style", "width: 91%; transition: 0.3s;")
    main.setAttribute("style", "width: 100vw; left: 0px; transition: 0.3s;")
    header.setAttribute("style", "width: 100vw; left: 0px; transition: 0.3s;")
    headerTitle.setAttribute("style", "margin-left: 10.5vw;")
    resetMenuBtns()
  } else {
    menu.classList.remove('not-displayed')
    menu.classList.add('displayed')
    content.setAttribute("style", "width: 89.4%; transition: 0.3s;")
    main.setAttribute("style", "transition: 0.3s; width: 85vw; left: 15vw;")
    header.setAttribute("style", "transition: 0.3s; width: 85vw; left: 15vw;")
    headerTitle.setAttribute("style", "margin-left: 7.5vw;")
    animateMenuButtonsIn()
  }
}

setTimeout(() => {
  main.setAttribute("style", "opacity: 1; width: 100vw; left: 0px;")
}, 1000);

setTimeout(() => {
  header.setAttribute("style", "opacity: 1; width: 100vw; left: 0px;")
}, 2000);

const changeContent = (givenContent) => {
  content.innerHTML = givenContent
}

const changeHeader = (givenContent) => {
  headerTitle.innerText = `${givenContent}`
}

const contentTransition = (e, html, title) => {
  e.target.classList.toggle('btn-clicked-animate')
  setTimeout(() => {
    content.classList.add('transition')
    headerTitle.classList.remove('slide-in-right')
    headerTitle.classList.add('slide-out-right')
  }, 0);
  setTimeout(() => {
    content.classList.remove('transition')
    headerTitle.classList.remove('slide-out-right')
    headerTitle.classList.add('slide-in-right')
    changeContent(html)
    changeHeader(title)
  }, 1000);
}

// event listeners

menuBtn.addEventListener('click', toggleMenu)

aboutBtn.addEventListener('click', (e) => {
  contentTransition(e, aboutMeHTML, 'About Me')
})

projectsBtn.addEventListener('click', (e) => {
  contentTransition(e, projectsHTML, 'My Projects')
})

blogBtn.addEventListener('click', (e) => {
  contentTransition(e, blogHTML, 'My Blog')
})

contactBtn.addEventListener('click', (e) => {
  contentTransition(e, contactHTML, 'Contact Me')
})
