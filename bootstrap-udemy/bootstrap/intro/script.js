const btn = document.querySelector('.hamburger')
const btnItems = document.querySelectorAll('.hamburger__item')
btn.addEventListener('click', () => {
  btnItems[0].classList.toggle('rotation')
  btnItems[1].classList.toggle('hidden')
  btnItems[2].classList.toggle('rotation-reverse')
})