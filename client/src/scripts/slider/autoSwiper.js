import { $btnNext, $btnPrev, moveSlide, checkSliderBoundaries } from './swiper'

export const startAutoSwiper = () => {
	let currentVector

	setInterval(() => {
		const sliderState = checkSliderBoundaries()

		if (sliderState === 'min') {
			currentVector = $btnNext
		} else if (sliderState === 'max') {
			currentVector = $btnPrev
		}

		moveSlide(currentVector)
	}, 7000)
}
