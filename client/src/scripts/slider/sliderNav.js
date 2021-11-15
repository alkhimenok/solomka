const slider = () => {
	const $sliderNav = document.querySelector('.products__nav')
	const $btnPrev = $sliderNav.querySelector(`[data-pagination=prev]`)
	const $btnNext = $sliderNav.querySelector(`[data-pagination=next]`)
	const $slider = document.querySelector('.slider')
	const $slide = $slider.querySelector('.slide')
	const $currentSlideNumber = document.querySelector('.pogination__current-slide-number')
	const $numberSlides = document.querySelector('.pogination__all-slide-number')
	const $track = document.querySelector('.pogination__track')
	const $tumb = document.querySelector('.pogination__thumb')

	const NUMBER_SLIDES = $slider.children.length
	const SLIDE_WIDTH = $slide.clientWidth
	const TRACK_WIDTH = $track.clientWidth

	let slideToScroll = window.screen.width >= 1281 ? 2 : 1
	let currentSlideNumber = 0
	$tumb.style.width = `${TRACK_WIDTH / NUMBER_SLIDES}px`

	$numberSlides.textContent = `0${NUMBER_SLIDES}`

	const startScroll = e => {
		const { target } = e

		if (target.dataset.pagination === 'prev') {
			currentSlideNumber--

			if (currentSlideNumber === 0) {
				$btnPrev.classList.add('_disable')
			}
			if (currentSlideNumber < NUMBER_SLIDES) {
				$btnNext.classList.remove('_disable')
			}
		} else if (target.dataset.pagination === 'next') {
			currentSlideNumber++

			if (currentSlideNumber >= NUMBER_SLIDES - 1) {
				$btnNext.classList.add('_disable')
			}
			if (currentSlideNumber >= 1) {
				$btnPrev.classList.remove('_disable')
			}
		}

		$slider.style.transform = `translateX(${-SLIDE_WIDTH * slideToScroll * currentSlideNumber}px)`
		$tumb.style.transform = `translateX(${$tumb.clientWidth * currentSlideNumber}px)`
		$currentSlideNumber.textContent = `0${currentSlideNumber + 1}`
		e.preventDefault()
	}

	$sliderNav.addEventListener('click', startScroll)
}

slider()
