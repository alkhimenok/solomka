export const $burgerIcon = document.querySelector('.burger__icon')

const $header = document.querySelector('.header')
const $body = document.body

export const showMenu = () => {
	$body.classList.toggle('_overflow-hidden')
	$burgerIcon.classList.toggle('_active')
	$header.classList.toggle('_show-menu')
}
