import express from 'express'
const router = express.Router()

import usersCtrl from '../controllers/usersCtrl.js'

router.post('/login', usersCtrl.login)

router.post('/register', usersCtrl.register)

export default router
