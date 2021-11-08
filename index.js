import { setMarginForBody } from './src/header/setIndent.js'
import { rewriteNumber } from './src/setNumber.js'
import { $burgerIcon, showMenu } from './src/header/burger.js'

const start = () => {
	setMarginForBody()
	rewriteNumber()

	$burgerIcon.addEventListener('click', showMenu)
}

window.addEventListener('load', start)
