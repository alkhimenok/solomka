import { $header, $body } from './mainIntend'

export const $burgerIcon = document.querySelector('.burger-icon')

export const showMenu = () => {
	$body.classList.toggle('_overflow-hidden')
	$burgerIcon.classList.toggle('_active')
	$header.classList.toggle('_show-menu')
}
