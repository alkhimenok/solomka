import './styles/main.scss'
import 'animate.css'
import WOW from 'wow.js'

import { showLoader, hideLoader } from './scripts/UI/loader'
import { $body, setMarginForHeader } from './scripts/indent'
import { setPhoneMask } from './scripts/phones/inputMask'
import { rewriteCallLinks } from './scripts/phones/callLinks'
import { navs, addHandlerPageNav } from './scripts/move/navMove'
import { applications, moveToSendSection } from './scripts/move/toSendSection'
import { $burgerIcon, toggleShowMenu } from './scripts/burger'
import {
	$slider,
	$sliderNav,
	setPoginationSize,
	setPositionTouchStart,
	setPositionTouchEnd,
	addHandlerSliderTouch,
	addHandlerSliderClicks,
} from './scripts/slider/swiper'
import { startAutoSwiper } from './scripts/slider/autoSwiper'
import { $sendForm, handlerChangeSendForm } from './scripts/form/validator'
import { submitForm } from './scripts/form/submit'

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
		$body.style.opacity = 1
		
		hideLoader()
	}
}

window.addEventListener('DOMContentLoaded', showLoader)
window.addEventListener('load', start)
