export const handlerRequest = async (url = '', method = 'GET', data = null) => {
	try {
		const headers = {}
		let body = {}

		if (data) {
			headers['Content-Type'] = 'application/json'
			body = JSON.stringify(data)
		}

		const response = await fetch(url, {
			method,
			headers,
			body,
		})
		return await response.json()
	} catch (error) {
		console.error(error)
	}
}
