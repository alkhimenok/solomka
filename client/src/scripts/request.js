export const addRequestHandler = async (url = '', method = 'GET', data = null) => {
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
	
		const responseData = await response.json()

		return responseData
	} catch (error) {
		console.log(error)
	}
}
