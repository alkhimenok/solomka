import { setMarginForBody } from './scripts/header/setIndent'
import { rewriteNumber } from './scripts/setNumber'
import { $burgerIcon, showMenu } from './scripts/header/burger'

import './styles/main.scss'

const start = () => {
	setMarginForBody()
	rewriteNumber()

	$burgerIcon.addEventListener('click', showMenu)
}

window.addEventListener('load', start)
