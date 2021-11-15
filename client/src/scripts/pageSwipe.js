import { $header } from './header/mainIntend'

export const swipePage = e => {
	if (e.target.tagName !== 'A') return

	const { target } = e
	const { href } = target.dataset
	const goToSection = document.querySelector(href)
	const sectionIndentTop = goToSection.getBoundingClientRect().top + pageYOffset - parseInt(getComputedStyle($header).height)

  window.scrollTo({
		top: sectionIndentTop,
		behavior: 'smooth',
	})

	e.preventDefault()
}