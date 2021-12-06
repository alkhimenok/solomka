import IMask from 'imask'

export const setPhoneMask = () => {
	const phoneInputs = document.querySelectorAll('[data-phone=mask]')

	phoneInputs.forEach(input => {
		input.placeholder = '+375 ( _ _ ) _ _ _-_ _-_ _'

		const maskOptions = { mask: '+{375} (00) 000-00-00' }

		IMask(input, maskOptions)
	})
}
