export const activeModal = () => {
	const modal = `
  <div class="modal">
    <div class="modal__body">
      <h4 class="modal__title">Спасибо за ваше сообщение!</h4>
      <p class="modal__subtit">Мы перезвоним вам в ближайшее время</p>
    </div>
  </div>
  `

	document.body.insertAdjacentHTML('afterbegin', modal)

	const $modal = document.querySelector('.modal')

	setTimeout(() => $modal.classList.add('_active'), 0)
	setTimeout(() => $modal.classList.remove('_active'), 4000)
}
