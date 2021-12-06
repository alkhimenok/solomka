import { $body } from '../indent'

export const $sendBtn = document.querySelector('#sendBtn')

let $modal = null
let $btnClose = null
let timeout
const modal = `
  <div class="modal" id="modal">
    <div class="modal__btn_close"></div>
    <div class="modal__body">
      <h4 class="modal__title">Спасибо за ваше <br> сообщение!</h4>
      <p class="modal__subtitle">Мы перезвоним вам в ближайшее время</p>
    </div>
  </div>
`

export const showModalSuccess = e => {
	e.preventDefault()

	if ($modal) return

	$body.insertAdjacentHTML('afterbegin', modal)

	$modal = document.querySelector('#modal')
	$btnClose = $modal.querySelector('.modal__btn_close')
	timeout = setTimeout(hideModalSuccess, 4000)

	setTimeout(() => $modal.classList.add('_show'), 0)

	$btnClose.addEventListener('click', hideModalSuccess)
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
