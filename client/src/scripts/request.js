export const handlerRequest = async (url = '/', method = 'GET', data = null) => {
	// lintener errors

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
    console.log('request:', responseData);
    
		return responseData
	} catch (error) {
		console.log(error)
	}
}