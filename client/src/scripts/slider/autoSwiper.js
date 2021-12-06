import { $arrowNext, $arrowPrev, moneSlide, checkSliderBoundaries } from './swiper'

export const startAutoSwiper = () => {
	let currentVector

	setInterval(() => {
		const sliderState = checkSliderBoundaries()

		if (sliderState === 'min') {
			currentVector = $arrowNext
		} else if (sliderState === 'max') {
			currentVector = $arrowPrev
		}

		moneSlide(currentVector)
	}, 7000)
}
