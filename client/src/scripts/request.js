import { showModal } from './UI/modal'

export const handlerRequest = async (url = '', method = 'GET', reqData = null) => {
	try {
		const headers = {}
		let body = {}

		if (reqData) {
			headers['Content-Type'] = 'application/json'
			body = JSON.stringify(reqData)
		}

		const response = await fetch(url, {
			method,
			headers,
			body,
		})

		const resData = await response.json()

		if (resData.status > 399) {
			showModal('error', 'Сообщение не отправлено!', 'Произошел сбой сервера, попробуйте отправить сообщение позже.')

			throw new Error(resData.info)
		} else {
			return resData
		}
	} catch (error) {
		console.error(error)
	}
}
