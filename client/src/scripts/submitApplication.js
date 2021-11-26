import { addRequestHandler } from './request'

export const $form = document.querySelector('.send__form')

export const sendForm = e => {
	e.preventDefault()

	const { currentTarget: form, target } = e
	const btnSubmin = form.querySelector('.send__btn')

	if (target !== btnSubmin) return

	const { userName, userPhone } = form
	const { value: name } = userName
	const { value: phone } = userPhone

	const userData = {
		name,
		phone,
	}

	if (checkValid(userName, userPhone)) {
		addRequestHandler('/', 'POST', userData).then(data => console.log(data.status))

		userName.value = ''
		userPhone.value = ''
	}
}

const checkValid = (nameInput, phoneInput) => {
	if (nameInput.value.length < 2) {
		createLabel(nameInput, 'Некорректное имя!')
	} else {
		removeLabel(nameInput)
		return true
	}
	if (phoneInput.value.length !== 19) {
		createLabel(phoneInput, 'Некорректное имя!')
	} else {
		removeLabel(phoneInput)
		return true
	}
}

const createLabel = (input, textContent) => {
	const label = document.createElement('span')

	label.classList.add('send__label-text')
	label.textContent = textContent

	input.insertAdjacentElement('afterend', label)
}

const removeLabel = input => {
	input.nextElementSibling?.remove()
}
