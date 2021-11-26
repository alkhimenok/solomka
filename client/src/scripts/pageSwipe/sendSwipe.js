import { swipeToSection } from './smoothSwipe'

const sendForms = document.querySelectorAll('[data-form=application]')

export const addSendSwipeHandler = () => {
	sendForms.forEach(form => form.addEventListener('click', goToSendSection))
}

const goToSendSection = e => {
	const { currentTarget: form, target } = e
	const input = form.querySelector('input')
	const btn = form.querySelector('a')
	const { href } = btn.dataset

	if (input?.value) {
    const userPhone = document.querySelector('#userPhone')
    userPhone.value = input.value
	}

	if (target === btn) {
		swipeToSection(href)
	}

	e.preventDefault()
}
