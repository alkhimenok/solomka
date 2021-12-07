import { $body } from '../indent'

let $loader = null
const loader = `
  <div class="loader" id="loader">
    <span class="loader-line"></span>
    <span class="loader-line"></span>
    <span class="loader-line"></span>
  </div>
`

export const showLoader = () => {
	if ($loader) return

	$body.insertAdjacentHTML('afterbegin', loader)

	$loader = document.querySelector('#loader')

	setTimeout(() => $loader.classList.add('_show'), 0)
}

export const hideLoader = () => {
	if (!$loader) return document.querySelector('#loader')?.remove()

	$loader.classList.remove('_show')

	setTimeout(() => {
		$loader.remove()

		$loader = null
	}, 600)
}
