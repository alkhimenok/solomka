import { $inputUserName, $inputUserPhone, $btnSendForm } from './validator'
import { getCorrectCallLink } from '../utils'
import { getFullDate } from '../utils'
import { handlerRequest } from '../request'
import { showModalSuccess } from '../UI/modal'

export const submitForm = e => {
	e.preventDefault()

	if ($btnSendForm.classList.contains('_disable')) return

	console.log('submit');

	const { value: name } = $inputUserName
	const { value: phone } = $inputUserPhone

	const userData = {
		callLink: getCorrectCallLink(phone),
		date: getFullDate(),
		name,
		phone,
	}

	handlerRequest('/', 'POST', userData).then(data => {
		const { name, status } = data

		if (status === 200) {
			showModalSuccess(name)
			clearFomr()
			console.log(data)
		}
	})
}

const clearFomr = () => {
	$inputUserName.value = ''
	$inputUserPhone.value = ''
	$btnSendForm.classList.add('_disable')
}
