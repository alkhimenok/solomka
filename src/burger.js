export const burgerIcon = document.querySelector('.burger__icon')

const menu = document.querySelector('.header__menu')

export const showNav = e => {
	const { currentTarget } = e

  document.body.style.overflow = 'hidden'
  currentTarget.classList.toggle('_active')
  menu.classList.toggle('_show-menu')
}
