export const rewriteNumber = () => {
	const phones = document.querySelectorAll('.phone')

	phones.forEach($phone => {
		const $number = $phone.querySelector('.number')
		const correnctLink = `tel:${$number.textContent.replace(/[^\d]/g, '')}`

		$phone.href = correnctLink
	})
}
