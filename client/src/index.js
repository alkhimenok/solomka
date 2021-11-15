import { setMarginForBody } from './scripts/header/mainIntend'
import { $burgerIcon, $menu, showMenu, hideMenu } from './scripts/header/burger'
import { rewriteNumber } from './scripts/numbers/phoneLink'
import { setMask } from './scripts/numbers/inputMask'
import { swipePage } from './scripts/pageSwipe'
import { $advantage, startEfect } from './scripts/advantegeEfects'

import {} from './scripts/sliderNav'

import './styles/main.scss'

const start = () => {
	setMarginForBody()
	rewriteNumber()
	setMask()

	document.addEventListener('click', swipePage)
	$advantage.addEventListener('mouseover', startEfect)
	$burgerIcon.addEventListener('click', showMenu)
	$menu.addEventListener('click', hideMenu)
}

window.addEventListener('load', start)
