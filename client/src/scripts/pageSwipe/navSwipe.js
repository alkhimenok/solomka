import { swipeToSection } from './smoothSwipe'

export const $nav = document.querySelector('.nav')

export const sectionSwipe = e => {
	if (e.target.tagName !== 'A') return

	const { target } = e
	const { href } = target.dataset

	swipeToSection(href)

	e.preventDefault()
}
