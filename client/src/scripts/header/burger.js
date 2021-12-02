import { $header, $body } from './mainIntend'

export const $burgerIcon = document.querySelector('.burger-icon')

export const $menu = document.querySelector('.header__menu')

export const showMenu = () => {
	$body.classList.toggle('_overflow-hidden')
	$burgerIcon.classList.toggle('_active')
	$header.classList.toggle('_show-menu')
}

export const hideMenu = e => {
	const { target } = e
	if (target.tagName == 'A') {
		$body.classList.remove('_overflow-hidden')
		$burgerIcon.classList.remove('_active')
		$header.classList.remove('_show-menu')
	}
}
