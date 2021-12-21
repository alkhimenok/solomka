import { $inputUserName, $inputUserPhone, $btnSendForm } from './validator'
import { getCorrectCallLink } from '../utils'
import { getFullDate } from '../utils'
import { handlerRequest } from '../request'
import { showModal } from '../UI/modal'

export const submitForm = e => {
	e.preventDefault()

	if ($btnSendForm.classList.contains('_disable')) return

	const { value: name } = $inputUserName
	const { value: phone } = $inputUserPhone

	const userData = {
		callLink: getCorrectCallLink(phone),
		date: getFullDate(),
		name,
		phone,
	}

	handlerRequest('/', 'POST', userData).then(data => {
		if (data === undefined) return

		const { name, status } = data

		if (status === 200) {
			showModal('success', name, 'Мы перезвоним вам в ближайшее время')
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
