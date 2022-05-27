import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
  try {
    if (!req.header('Authorization')) return res.status(401).json({ msg: 'No token, authentication denied' })

    const token = req.header('Authorization').replace('Bearer ', '')
    if (!token) return res.status(400).json({ msg: 'No token, authentication denied' })

    jwt.verify(token, process.env.SECRET, (err, user) => {
      if (err) return res.status(400).json({ msg: 'Token is not valid' })

      req.user = user
      next()
    })
  } catch (err) {
    return res.status(500).json({ msg: err })
  }
}

export default auth
