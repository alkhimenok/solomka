import { $inputUserName, $inputUserPhone, $btnSendForm } from './validator'
import { getFullDate } from '../utils'
import { handlerRequest } from '../request'
import { showModalSuccess } from '../UI/modal'

export const submitForm = e => {
	e.preventDefault()

	const { value: name } = $inputUserName
	const { value: phone } = $inputUserPhone

	const userData = {
		name,
		phone,
		date: getFullDate(),
	}

	console.log(userData);

	handlerRequest('/', 'POST', userData)

	showModalSuccess(name)

	$inputUserName.value = ''
	$inputUserPhone.value = ''
	$btnSendForm.classList.add('_disable')
}

