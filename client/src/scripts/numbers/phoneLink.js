export const rewriteNumber = () => {
	const phones = document.querySelectorAll('[data-phone="href"]')

	phones.forEach($phone => {
		const $number = $phone.querySelector('[data-phone="number"]')
		const correnctLink = `tel:${$number.textContent.replace(/[^\d]/g, '')}`

		$phone.href = correnctLink
	})
}
