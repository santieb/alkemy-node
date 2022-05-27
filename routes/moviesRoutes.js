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

export default router