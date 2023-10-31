const inputNav = document.querySelector('#nav__input')

document.querySelector('.nav__links').addEventListener('click', ({target}) => {
  if (target.matches('.nav__link')) inputNav.checked = false
})