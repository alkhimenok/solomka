import { moveToSection } from './movementAnimation'

export const applications = document.querySelectorAll('[data-form=application]')

export const moveToSendSection = e => {
	const { currentTarget: form, target } = e

	const input = form.querySelector('input')
	const btn = form.querySelector('a')

	const { href } = btn.dataset

	if (input?.value) {
		const userPhone = document.querySelector('#userPhone')

		userPhone.value = input.value
	}

	if (target === btn) {
		moveToSection(href)
	}

	e.preventDefault()
}
