import { getCorrectCallLink } from '../utils'

export const rewriteCallLinks = () => {
	const callLinks = document.querySelectorAll('[data-phone="href"]')

	callLinks.forEach($link => {
		const $number = $link.querySelector('[data-phone="number"]')

		$link.href = getCorrectCallLink($number.textContent)
	})
}
