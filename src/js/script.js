const navbarMenu = document.querySelector('.navbar__menu')
const bg = document.querySelector('.navbar__bg')
const openBtn = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.navbar__close')
const body = document.querySelector('.body')

function toggleClass(item) {
  item.addEventListener('click', function (event) {
    event.preventDefault()
    navbarMenu.classList.toggle('navbar__menu_active')
    bg.classList.toggle('navbar__bg_active')
    body.classList.toggle('body_active')
  })
}

toggleClass(openBtn)
toggleClass(closeBtn)

window.addEventListener('scroll', function () {
  const nav = document.querySelector('.navbar')
  nav.classList.toggle('navbar_black', window.scrollY > 20)
  // document.querySelector('.navbar__wrapper').style.height = '70px'
})

const slider = tns({
  container: '.slider__wrapper',
  items: 1,
  startIndex: 1,
  center: true,
  loop: false,
  swipeAngle: false,
  speed: 400,
  slideBy: 'page',
  controls: false,
  nav: false,
  rewind: false,
  preventScrollOnTouch: "force",
  mouseDrag: true,
  prevButton: '.prev',
  nextButton: '.next'
})
document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev')
})
document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next')
})