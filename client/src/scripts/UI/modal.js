import { $body } from '../indent'

let $modal = null
let $btnClose = null
let timeout

export const showModalSuccess = name => {
	if ($modal) return

	$body.insertAdjacentHTML('afterbegin', getModal(name))

	$modal = document.querySelector('#modal')
	$btnClose = $modal.querySelector('.modal__btn_close')
	timeout = setTimeout(hideModalSuccess, 4000)
	
	setTimeout(() => $modal.classList.add('_show'), 100)
	
	$btnClose.addEventListener('click', hideModalSuccess)
}

const getModal = name => {
	const startMessage = name ? name?.slice(0, 1).toUpperCase() + name?.slice(1) + ', мы' : 'Мы'

	return `
		<div class="modal" id="modal">
			<div class="modal__btn_close"></div>
			<div class="modal__body">
				<h4 class="modal__title">Спасибо за ваше <br> сообщение!</h4>
				<p class="modal__subtitle">${startMessage} перезвоним вам в ближайшее время</p>
			</div>
		</div>
	`
}

const hideModalSuccess = () => {
	if (!$modal) return document.querySelector('#modal')?.remove()

	$modal.classList.remove('_show')

	setTimeout(() => {
		$btnClose.removeEventListener('click', hideModalSuccess)

		$modal.remove()

		$btnClose = null
		$modal = null

		clearTimeout(timeout)
	}, 600)
}
