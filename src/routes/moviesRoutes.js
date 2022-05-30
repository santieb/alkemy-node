import express from 'express'
const router = express.Router()

import auth from '../middlewares/auth.js'

import moviesCtrl from '../controllers/moviesCtrl.js'

router.route('/')
  .get(auth, moviesCtrl.getMovies)
  .post(auth, moviesCtrl.createMovie)

router.route('/:id')
  .get(auth, moviesCtrl.getMovie)
  .put(auth, moviesCtrl.updateMovie)
  .delete(auth, moviesCtrl.deleteMovie)

router.route('/characters/:id')
  .post(auth, moviesCtrl.addCharacter)
  .delete(auth, moviesCtrl.unassignCharacter)

export default router
