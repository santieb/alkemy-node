import express from 'express'
const router = express.Router()

import charactersCtrl from '../controllers/charactersCtrl.js'

router.get('/', charactersCtrl.getCharacters)

router.get('/:id', charactersCtrl.getCharacter)

export default router