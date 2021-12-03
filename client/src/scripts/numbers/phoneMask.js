import IMask from 'imask'

export const setMask = () => {
	const inputs = document.querySelectorAll('[data-phone=mask]')

	inputs.forEach(input => {
		input.placeholder = '+375 ( _ _ ) _ _ _-_ _-_ _'

		const maskOptions = {
			mask: '+{375} (00) 000-00-00',
		}

		IMask(input, maskOptions)
	})
}
