import { setMarginForBody } from './scripts/header/mainIntend'
import { rewriteNumber } from './scripts/numbers/phoneLink'
import { setMask } from './scripts/numbers/phoneMask'
import { addSliderHandeler } from './scripts/sliderNav'
import { addSendSwipeHandler } from './scripts/pageSwipe/sendSwipe'
import { $nav, sectionSwipe } from './scripts/pageSwipe/navSwipe'
import { $menu, $burgerIcon, hideMenu, showMenu } from './scripts/header/burger'
import { $advantage, startEfect } from './scripts/advantegeEfects'
import { $form, sendForm } from './scripts/submitApplication'

import './styles/main.scss'

const start = () => {
	setMarginForBody()
	rewriteNumber()
	setMask()
	addSliderHandeler()
	addSendSwipeHandler()

	$nav.addEventListener('click', sectionSwipe)
	$menu.addEventListener('click', hideMenu)
	$burgerIcon.addEventListener('click', showMenu)
	$advantage.addEventListener('mouseover', startEfect)
	$form.addEventListener('click', sendForm)
}

window.addEventListener('load', start)

// import { addRequestHandler } from './scripts/request'

// const form = document.querySelector('.send__form')
// form.addEventListener('submit', hello)
// const hello = e => {
// 	e.preventDefault()


// }
