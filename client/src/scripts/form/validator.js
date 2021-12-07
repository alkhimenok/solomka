export const { sendForm: $sendForm } = document.forms

export const $inputUserName = $sendForm.inputUserName
export const $inputUserPhone = $sendForm.inputUserPhone
export const $btnSendForm = $sendForm.btnSendForm

let isUserNameValid = false
let isUserPhoneValid = false

export const handlerChangeSendForm = e => {
	const { target } = e
	const { value } = target

	if (target === $inputUserName) {
		isUserNameValid = isInputValid(target, value.length < 2)
	} else {
		isUserPhoneValid = isInputValid(target, value.length < 19)
	}

	if (isUserNameValid && isUserPhoneValid) {
		$btnSendForm.classList.remove('_disable')
	} else {
		$btnSendForm.classList.add('_disable')
	}
}

const isInputValid = ($input, condition) => {
	const $fieldset = $input.closest('fieldset')

	if (condition) {
		$fieldset.classList.add('_no-valid')
		return false
	} else {
		$fieldset.classList.remove('_no-valid')
		return true
	}
}
