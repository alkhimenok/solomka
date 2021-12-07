export const getSectionHeight = $section => getComputedStyle($section).height

export const getCorrectCallLink = phone => `tel:${phone.replace(/[^\d]/g, '')}`

export const getFullDate = () => getTime() + ', ' + getDate()

export const getDate = () => {
	return `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`
		.split('.')
		.map(e => String(e).padStart(2, '0'))
		.join('.')
}
export const getTime = () => {
	return `${new Date().getHours()}:${new Date().getMinutes()}`
		.split(':')
		.map(e => String(e).padStart(2, '0'))
		.join(':')
}
