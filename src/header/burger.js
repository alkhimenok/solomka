import { $header, $body } from './setIndent.js'

export const $burgerIcon = document.querySelector('.burger__icon')

export const showMenu = () => {
	$body.classList.toggle('_overflow-hidden')
	$burgerIcon.classList.toggle('_active')
	$header.classList.toggle('_show-menu')
}
