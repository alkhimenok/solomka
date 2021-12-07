import './styles/main.scss'
import 'animate.css'
import WOW from 'wow.js'

import { showLoader, hideLoader } from './scripts/UI/loader' // ok
import { setMarginForHeader } from './scripts/indent' // ok
import { setPhoneMask } from './scripts/phones/inputMask' // ok
import { rewriteCallLinks } from './scripts/phones/callLinks' // ok
import { navs, addHandlerPageNav } from './scripts/pageMove/navMove' // ok
import { applications, moveToSendSection } from './scripts/pageMove/toSendSection' // ok
import { $burgerIcon, toggleShowMenu } from './scripts/burger' // ok
import {
	$slider,
	$sliderNav,
	setPoginationSize,
	setPositionTouchStart,
	setPositionTouchEnd,
	addHandlerSliderTouch,
	addHandlerSliderClicks,
} from './scripts/slider/swiper' // ok
import { startAutoSwiper } from './scripts/slider/autoSwiper' // ok
import { $sendForm, handlerChangeSendForm } from './scripts/form/validator' // ok
import { submitForm } from './scripts/form/submit' // ok

const start = () => {
	try {
		new WOW().init()

		setMarginForHeader()
		setPhoneMask()
		rewriteCallLinks()
		setPoginationSize()
		startAutoSwiper()

		navs.forEach($nav => $nav.addEventListener('click', addHandlerPageNav))
		applications.forEach($application => $application.addEventListener('click', moveToSendSection))
		$burgerIcon.addEventListener('click', toggleShowMenu)
		$slider.addEventListener('touchstart', setPositionTouchStart)
		$slider.addEventListener('touchmove', setPositionTouchEnd)
		$slider.addEventListener('touchend', addHandlerSliderTouch)
		$sliderNav.addEventListener('click', addHandlerSliderClicks)
		$sendForm.addEventListener('change', handlerChangeSendForm)
		$sendForm.addEventListener('submit', submitForm)
	} catch (error) {
		console.error(error)
	} finally {
		hideLoader()
	}
}

window.addEventListener('DOMContentLoaded', showLoader)
window.addEventListener('load', start)
