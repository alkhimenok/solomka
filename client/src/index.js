import './styles/main.scss'
import 'animate.css'
import * as WOW from 'wow.js'

import { showLoader, hideLoader } from './scripts/UI/loader'
import { setMarginForBody } from './scripts/header/mainIntend'
import { rewriteNumber } from './scripts/numbers/phoneLink'
import { setMask } from './scripts/numbers/phoneMask'
import { addSliderHandeler } from './scripts/sliderNav'
import { addSendSwipeHandler } from './scripts/pageSwipe/sendSwipe'
import { navs, sectionSwipe } from './scripts/pageSwipe/navSwipe'
import { $menu, $burgerIcon, hideMenu, showMenu } from './scripts/header/burger'
import { $advantage, startEfect } from './scripts/advantegeEfects'
import { $form, sendForm } from './scripts/submitApplication'

const loadScripts = () => {	
	setMarginForBody()

	new WOW().init()
	
	rewriteNumber()
	setMask()
	addSliderHandeler()
	addSendSwipeHandler()

	navs.forEach($nav => {
		$nav.addEventListener('click', sectionSwipe)
	})
	$menu.addEventListener('click', hideMenu)
	$burgerIcon.addEventListener('click', showMenu)
	$advantage.addEventListener('mouseover', startEfect)
	$form.addEventListener('click', sendForm)

	setTimeout(hideLoader, 0)
}

const start = () => {
	showLoader()

	window.addEventListener('load', loadScripts)
}

window.addEventListener('DOMContentLoaded', start)
