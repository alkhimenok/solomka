export const { sendForm: $sendForm } = document.forms

export const $inputUserName = $sendForm.inputUserName
export const $inputUserPhone = $sendForm.inputUserPhone
export const $btnSendForm = $sendForm.btnSendForm

export const handlerChangeSendForm = e => {
	// let isUserNameValid = isInputValid($inputUserName, $inputUserName.value.length < 2)
	// let isUserPhoneValid = isInputValid($inputUserPhone, $inputUserPhone.value.length < 19)

	// if (isUserNameValid && isUserPhoneValid) {
		$btnSendForm.classList.remove('_disable')
	// } else {
	// 	$btnSendForm.classList.add('_disable')
	// }
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
