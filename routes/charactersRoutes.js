import express from 'express'
const router = express.Router()

import auth from '../middlewares/auth.js'
import charactersCtrl from '../controllers/charactersCtrl.js'

router.route('/')
  .get(auth, charactersCtrl.getCharacters)
  .post(auth, charactersCtrl.createCharacter)

router.route('/:id')
  .get(auth, charactersCtrl.getCharacter)
  .put(auth, charactersCtrl.updateCharacter)
  .delete(auth, charactersCtrl.deleteCharacter)

export default router