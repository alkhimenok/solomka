const express = require('express')
const path = require('path')
const config = require('config')
const bodyParser = require('body-parser')

const { submitMail } = require('./mailer/submitMail')

const app = express()

const PORT = config.get('port')

app.use(express.static(path.resolve(__dirname, 'client', 'dist')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html')))

app.post('/', (req, res) => {
	const { body } = req

	if (!(body.name.lenght < 2) && !(body.phone.length < 19)) {
		submitMail(body)

		body.status = 200

		res.status(200).json(body)
	} else {
		body.status = 400
		body.info = 'incomplete data'

		res.sendStatus(400).json(body)
	}
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
