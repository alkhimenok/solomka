import { moveToSection } from './movementAnimation'
import { hideMenu } from '../burger'

export const navs = document.querySelectorAll('[data-list="nav"]')

export const addHandlerPageNav  = e => {
	if (e.target.tagName !== 'A') return

	const { target } = e
	const { href } = target.dataset

	moveToSection(href)
	hideMenu()

	e.preventDefault()
}
