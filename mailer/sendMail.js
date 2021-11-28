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

module.exports = sendMail = userData => {
	const mailOptions = setMailOptions(userData)

	transparter.sendMail(mailOptions, err => console.log(err))
}

const setMailOptions = data => {
	const { name, phone, date } = data

	return {
		from: 'alhikirill@gmail.com',
		to: 'kirillalhi@gmail.com',
		subject: 'Пользователь хочет получить вошу консультацию',
		html: `
			<div style="padding: 10px; font-family: Verdana, Geneva, Tahoma, sans-serif">
        <div style="margin: 25px 0">
          <h3 style="display: block; margin: 0 15px 0 0; color: #000000">Имя пользователя:</h3>
          <p style="margin: 5px 0px; font-size: 22px; letter-spacing: 1px; color: #464646; text-transform: capitalize; background-color: #fafafa;">${name}</p>
        </div>
        <div style="margin: 25px 0">
          <h3 style="display: block; margin: 0 15px 0 0; color: #000000">Номер телефона:</h3>
          <a href="${getCorretctPhone(phone)}" style="text-decoration: none">
            <p style="margin: 5px 0px; font-size: 22px; letter-spacing: 1px; color: #464646; text-transform: uppercase; background-color: #fafafa;">${phone}</p>
          </a>
        </div>
        <div style="margin: 25px 0">
          <h3 style="display: block; margin: 0 15px 0 0; color: #000000">Заявка была отправлена:</h3>
          <p style="margin: 5px 0px; font-size: 22px; letter-spacing: 1px; color: #464646; text-transform: uppercase; background-color: #fafafa;">${date}</p>
        </div>
			</div>
		`,
	}
}

const getCorretctPhone = number => {
	return `tel:${number.replace(/[^\d]/g, '')}`
}
