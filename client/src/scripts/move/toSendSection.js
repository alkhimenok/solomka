import { moveToSection } from './moveMentAnimation'

export const applications = document.querySelectorAll('[data-form=application]')

export const moveToSendSection = e => {
	const { currentTarget: form, target } = e

	const input = form.querySelector('input')
	const btn = form.querySelector('a')

	const { href } = btn.dataset

	if (input?.value) {
		const inputUserPhone = document.querySelector('#inputUserPhone')

		inputUserPhone.value = input.value
	}

	if (target === btn) {
		moveToSection(href)
	}

	e.preventDefault()
}
