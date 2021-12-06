import { $body } from './indent'

export const $burgerIcon = document.querySelector('#burgerIcon')

const $menu = document.querySelector('#menu')

export const toggleShowMenu = () => (isMenuOpened() ? hideMenu() : showMenu())

const showMenu = () => {
	$body.classList.add('_overflow-hidden')
	$burgerIcon.classList.add('_close-icon')
	$menu.classList.add('_opened')

	$body.addEventListener('click', appHandlerOtherClicks)
}

const hideMenu = () => {
	$body.classList.remove('_overflow-hidden')
	$burgerIcon.classList.remove('_close-icon')
	$menu.classList.remove('_opened')

	$body.removeEventListener('click', appHandlerOtherClicks)
}

const isMenuOpened = () => !!$menu.classList.contains('_opened')

const appHandlerOtherClicks = e => (!e.target.closest('#menu') && e.target !== $burgerIcon ? hideMenu() : null)
