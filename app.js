const express = require('express')
const path = require('path')
const config = require('config')

const app = express()

const PORT = config.get('port')

app.use(express.static(path.resolve(__dirname, 'client', 'dist')))

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
})
app.get('/about', (req, res) => {
	res.send('about')
})
app.get('/products', (req, res) => {
	res.send('products')
})
app.get('/for', (req, res) => {
	res.send('for')
})
app.get('/contacts', (req, res) => {
	res.send('contacts')
})

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`)
})
