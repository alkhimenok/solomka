import { $btnNext, $btnPrev, slides, moveSlide, checkSliderBoundaries } from './swiper'

export const startAutoSwiper = () => {
	if (slides.length <= 2) return 

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
