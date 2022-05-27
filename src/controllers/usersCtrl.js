import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import sendMail from '../helpers/email.js'

const usersCtrl = {
  register: async (req, res) => {
    try {
      const { email, password } = req.body

      if (!email || !password)
        return res.status(400).json({ msg: 'Please fill in all fields' })

      if (!validateEmail(email))
        return res.status(400).json({ msg: 'Invalid email' })

      const userExist = await User.findOne({ where: { email } })
      if (userExist)
        return res.status(400).json({ msg: 'This email already exists' })

      if (password.length < 6)
        return res.status(400).json({ msg: 'Password must be at least 6 characters' })

      const passwordHash = await bcrypt.hash(password, 12)

      const user = await new User({ email, password: passwordHash })
      await user.save()

      sendMail(email)

      res.status(200).json({ msg: 'Register sucess!' })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body

      if (!email || !password)
        return res.status(401).json({ msg: 'Please fill in all fields' })

      const user = await User.findOne({ where: { email } })
      if (!user)
        return res.status(400).json({ msg: 'This email does not exist' })

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch)
        return res.status(401).json({ msg: 'Invalid password' })

      const token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: process.env.EXPIRESIN
      })

      res.status(200).json({ msg: 'Login sucess!', token })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  }
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

export default usersCtrl
