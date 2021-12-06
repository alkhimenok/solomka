import { $body } from '../indent'

let $spinner = null
const spinner = `
  <div class="loader" id="loader">
    <span class="loader-line"></span>
    <span class="loader-line"></span>
    <span class="loader-line"></span>
  </div>
`

export const showLoader = () => {
	if ($spinner) return

	$body.insertAdjacentHTML('afterbegin', spinner)

	$spinner = document.querySelector('#loader')

	setTimeout(() => $spinner.classList.add('_show'), 0)
}

export const hideLoader = () => {
	if (!$spinner) return document.querySelector('#loader')?.remove()

	$spinner.classList.remove('_show')

	setTimeout(() => {
		$spinner.remove()

		$spinner = null
	}, 600)
}
