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
	console.log(req.body)

	const resp = req.body
	resp.status = 200
	res.json(resp)

	sendMail({
		subject: 'Пользователь хочет получить вошу консультацию',
		text: `Номер пользователя${req.body.name}, его имя${req.body.phone}`,
	})
})

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
})

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`)
})
