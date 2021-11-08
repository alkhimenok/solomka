const express = require('express')
const path = require('path')
const config = require('config')

const app = express()

const PORT = config.get('port')

app.use(express.static(path.resolve(__dirname, 'client')))

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`)
})
