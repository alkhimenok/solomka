export const getFullDate = () => {
	const date = new Date()
	.toJSON()
	.slice(0, 10)
	.replace(/-/g, '.')
	.split('.')
	.reverse()
	.map((e, i) => (i === 0 ? ++e : +e))
	.map(e => String(e).padStart(2, '0'))
	.join('.')

const time = new Date()
	.toJSON()
	.slice(11, 16)
	.split(':')
	.map((e, i) => (i === 0 ? ((3 + +e) > 23 ? e - 21 : e ): +e))
	.map(e => String(e).padStart(2, '0'))
	.join(':')

	return date + ', ' + time
}