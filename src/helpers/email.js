import dotenv from 'dotenv'
dotenv.config()
import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendMail = async (to) => {
  try {
    const msg = {
      to,
      from: 'santiagonicolasbarreto@gmail.com',
      subject: 'Prueba',
      html: '<h1><strong>Prueba</strong></h1>'
    }
    await sgMail.send(msg)
    console.log('Message sent successfully')
  } catch (err) {
    console.log(err)
    if (err.response) console.log(err.response)
  }
}

export default sendMail
