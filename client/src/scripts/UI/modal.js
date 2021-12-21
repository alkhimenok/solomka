import { $body } from '../indent'

let $modal = null
let $btnClose = null
let timeout

export const showModal = (type, title, description) => {
	if ($modal) return

	$body.insertAdjacentHTML('afterbegin', getModal(type, title, description))

	$modal = document.querySelector('#modal')
	$btnClose = $modal.querySelector('.modal__btn_close')
	timeout = setTimeout(hideModal, 4000)
	
	setTimeout(() => $modal.classList.add('_show'), 100)
	
	$btnClose.addEventListener('click', hideModal)
}

const getModal = (type, title, description) => {
	let modalTitle

	if (type === 'success') {
		modalTitle = title ? title?.slice(0, 1).toUpperCase() + title?.slice(1) + ', cпасибо за ваше сообщение!' : 'Cпасибо за ваше сообщение!'
	} else if (type === 'error') {
		modalTitle = title
	}

	return `
		<div class="modal ${type === 'error' ? '_error' : ''}" id="modal">
			<div class="modal__btn_close"></div>
			<div class="modal__body">
				<h4 class="modal__title">${modalTitle}</h4>
				<p class="modal__description">${description}</p>
			</div>
		</div>
	`
}

const hideModal = () => {
	if (!$modal) return document.querySelector('#modal')?.remove()

	$modal.classList.remove('_show')

	setTimeout(() => {
		$btnClose.removeEventListener('click', hideModal)

		$modal.remove()

		$btnClose = null
		$modal = null

		clearTimeout(timeout)
	}, 600)
}
