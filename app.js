const express = require('express')
const path = require('path')
const config = require('config')
const bodyParser = require('body-parser')

const sendMail = require('./mailer/sendMail')

const app = express()

const PORT = config.get('port')

app.use(express.static(path.resolve(__dirname, 'client', 'dist')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.post('/', (req, res) => {
	const { body } = req

	sendMail(body)


	const resp = body
	resp.status = 200
	res.json(resp)
})

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
})

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`)
})
