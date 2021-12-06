import { moveToSection } from './movementAnimation'
import { toggleShowMenu } from '../burger'

export const navs = document.querySelectorAll('[data-list="nav"]')

export const handlerNavMove = e => {
	if (e.target.tagName !== 'A') return

	const { target } = e
	const { href } = target.dataset

	moveToSection(href)
	toggleShowMenu()

	e.preventDefault()
}
