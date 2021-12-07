import './styles/main.scss'
import 'animate.css'
import WOW from 'wow.js'

import { showLoader, hideLoader } from './scripts/UI/loader'
import { setMarginForHeader } from './scripts/indent'
import { setPhoneMask } from './scripts/phones/inputMask'
import { rewriteCallLinks } from './scripts/phones/callLinks'
import { navs, handlerNavMove } from './scripts/pageMove/navMove'
import { applications, moveToSendSection } from './scripts/pageMove/toSendSection'
import { $burgerIcon, toggleShowMenu } from './scripts/burger'
import {
	$slider,
	$sliderNav,
	setPositionTouchStart,
	setPositionTouchEnd,
	addHandlerCliderTouch,
	addHandlerCliderClicks,
	setPoginationSize,
} from './scripts/slider/swiper'
import { startAutoSwiper } from './scripts/slider/autoSwiper'
import { $sendForm, handlerChangeForm } from './scripts/form/validator'
import { submitForm } from './scripts/form/submit'

const start = () => {
	try {
		new WOW().init()

		setMarginForHeader()
		setPhoneMask()
		rewriteCallLinks()
		setPoginationSize()
		startAutoSwiper()

		navs.forEach($nav => $nav.addEventListener('click', handlerNavMove))
		applications.forEach($application => $application.addEventListener('click', moveToSendSection))
		$burgerIcon.addEventListener('click', toggleShowMenu)
		$slider.addEventListener('touchstart', setPositionTouchStart)
		$slider.addEventListener('touchmove', setPositionTouchEnd)
		$slider.addEventListener('touchend', addHandlerCliderTouch)
		$sliderNav.addEventListener('click', addHandlerCliderClicks)
		$sendForm.addEventListener('change', handlerChangeForm)
		$sendForm.addEventListener('submit', submitForm)
	} catch (error) {
		// lintener errors
		console.error(error)
	} finally {
		hideLoader()
	}
}

window.addEventListener('DOMContentLoaded', showLoader)
window.addEventListener('load', start)
