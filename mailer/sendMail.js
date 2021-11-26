const nodemailer = require('nodemailer')
const dotenv = require('dotenv')

dotenv.config()

const transparter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
})

module.exports = sendMail = (mailOptions) => {
  mailOptions.from = 'alhikirill@gmail.com'
  mailOptions.to = 'kirillalhi@gmail.com',

	transparter.sendMail(mailOptions, err => console.log(err))
}