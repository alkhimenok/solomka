const $sliderNav = document.querySelector('.products__nav')
const $btnPrev = $sliderNav.querySelector(`[data-pagination=prev]`)
const $btnNext = $sliderNav.querySelector(`[data-pagination=next]`)
const $slider = document.querySelector('.slider')
const $slides = $slider.querySelectorAll('.slide')
const $currentSlideNumber = document.querySelector('.pogination__current-slide-number')
const $numberSlides = document.querySelector('.pogination__all-slide-number')
const $track = document.querySelector('.pogination__track')
const $tumb = document.querySelector('.pogination__thumb')

const NUMBER_SLIDES = $slider.children.length
const SLIDE_WIDTH = $slides[0].clientWidth
const TRACK_WIDTH = $track.clientWidth

let slideToScroll = document.body.clientWidth >= 1281 ? 2 : 1
let currentSlideNumber = 0
let startTouch
let endTouch

export const addSliderHandeler = () => {
	$tumb.style.width = `${TRACK_WIDTH / NUMBER_SLIDES}px`
	$numberSlides.textContent = `0${NUMBER_SLIDES}`

	$sliderNav.addEventListener('click', checkDirections)
	$slider.addEventListener('touchstart', handlerTouchStart)
	$slider.addEventListener('touchmove', handlerTouchMove)
	$slider.addEventListener('touchend', handlerTouchEnd)
}

const checkDirections = e => {
	const { target } = e

	if (target === $btnPrev) {
		showPrevSlide()
	} else if (target === $btnNext) {
		showNextSlide()
	}

	e.preventDefault()
}

const showPrevSlide = () => {
	if (!$btnPrev.classList.contains('_disable')) {
		currentSlideNumber--
		moveSlide(SLIDE_WIDTH, slideToScroll, currentSlideNumber)
	}
}

const showNextSlide = () => {
	if (!$btnNext.classList.contains('_disable')) {
		currentSlideNumber++
		moveSlide(SLIDE_WIDTH, slideToScroll, currentSlideNumber)
	}
}

const moveSlide = (width, count, current) => {
	$slider.style.transform = `translateX(${-width * count * current}px)`
	$tumb.style.transform = `translateX(${$tumb.clientWidth * current}px)`
	$currentSlideNumber.textContent = `0${current + 1}`

	sheckPosition()
}

const sheckPosition = () => {
	if (currentSlideNumber === 0) {
		$btnPrev.classList.add('_disable')
	}
	if (currentSlideNumber < NUMBER_SLIDES) {
		$btnNext.classList.remove('_disable')
	}
	if (currentSlideNumber >= NUMBER_SLIDES - 1) {
		$btnNext.classList.add('_disable')
	}
	if (currentSlideNumber >= 1) {
		$btnPrev.classList.remove('_disable')
	}
}

const handlerTouchStart = e => {
	startTouch = e.touches[0].clientX
}

const handlerTouchMove = e => {
	endTouch = e.touches[0].clientX
}

const handlerTouchEnd = () => {
	if (startTouch > endTouch) {
		showNextSlide()
	} else {
		showPrevSlide()
	}
}
