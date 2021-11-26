import { $header } from '../header/mainIntend'

export const swipeToSection = selector => {
	const neededSection = document.querySelector(selector)
	const sectionIndentTop = neededSection.getBoundingClientRect().top + pageYOffset - parseInt(getComputedStyle($header).height)

	window.scrollTo({
		top: sectionIndentTop,
		behavior: 'smooth',
	})
}
