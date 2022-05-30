import nodemailer from 'nodemailer'

const sendEmail = async email => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  await transport.sendMail({
    from: '"Welcome to the Disney API!" <santieb@gmail.com>',
    to: email,
    subject: `Bienvenido! ${email} `,
    text: 'Ya puedes explorar el mundo de Disney!',
    html: `
    <p>Welcome to the my challenge with NodeJS</p>
    <p>Hope that the application is to your liking</p>
    <a href="https://github.com/santieb">santieb</a>
    `
  })
}

export default sendEmail
