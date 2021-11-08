import { rewriteNumber } from './src/setNumber.js'
import { $burgerIcon, showMenu } from './src/burger.js'

const start = () => {
	rewriteNumber()

	$burgerIcon.addEventListener('click', showMenu)
}

window.addEventListener('load', start)
