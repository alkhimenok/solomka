export const getSectionHeight = $section => getComputedStyle($section).height

export const getCorrectCallLink = phone => `tel:${phone.replace(/[^\d]/g, '')}`

export const getFullDate = () => getTime() + ', ' + getDate()

const getDate = () => {
	return new Date()
		.toJSON()
		.slice(0, 10)
		.replace(/-/g, '.')
		.split('.')
		.reverse()
		.map((e, i) => (i === 0 ? ++e : +e))
		.map(e => String(e).padStart(2, '0'))
		.join('.')
}
const getTime = () => {
	return new Date()
		.toJSON()
		.slice(11, 16)
		.split(':')
		.map((e, i) => (i === 0 ? (3 + +e > 23 ? e - 21 : e) : +e))
		.map(e => String(e).padStart(2, '0'))
		.join(':')
}
