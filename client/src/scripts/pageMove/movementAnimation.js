import { headerHeigth } from '../indent'

export const moveToSection = selector => {
	const neededSection = document.querySelector(selector)
	const top = neededSection.getBoundingClientRect().top + pageYOffset - parseInt(headerHeigth)

	window.scrollTo({ top, behavior: 'smooth' })
}
