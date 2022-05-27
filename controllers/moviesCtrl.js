import Movie from '../models/movieModel.js'

const moviesCtrl = {
  getMovies: async (req, res) => {
    try {
      const movies = await Movie.findAll({
        attributes: ['image', 'title', 'creationDate']
      })

      res.status(200).json({ msg: movies })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
  getMovie: async (req, res) => {
    try {
      const { id } = req.params

      const movie = await Movie.findByPk(id)

      if (!movie)
        return res.status(400).json({ msg: 'movie not found' })

      res.status(200).json({ msg: movie })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
  createMovie: async (req, res) => {
    try {
      const { image, title, creationDate, rating } = req.body

      if (!image || !title || !creationDate || !rating)
        return res.status(400).json({ msg: 'Please fill in all fields' })

      const movie = await new Movie({ image, title, creationDate, rating })
      await movie.save()

      res.status(200).json({ msg: 'Movie created successfully' })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
  updateMovie: async (req, res) => {
    try {
      const { id } = req.params
      const { image, title, creationDate, rating } = req.body

      if (!image || !title || !creationDate || !rating)
        return res.status(400).json({ msg: 'Please fill in all fields' })

      const movie = await Movie.findByPk(id)

      if (!movie)
        return res.status(400).json({ msg: 'Movie not found' })

      movie.image = image || movie.image
      movie.title = title || movie.title
      movie.creationDate = creationDate || movie.creationDate
      movie.rating = rating || movie.rating

      await movie.save()

      res.status(200).json({ msg: 'Movie updated successfully' })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
  deleteMovie: async (req, res) => {
    try {
      const { id } = req.params

      const movie = await Movie.findByPk(id)

      if (!movie)
        return res.status(400).json({ msg: 'Movie not found' })

      await movie.destroy()

      res.status(200).json({ msg: 'Movie deleted successfully' })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  }
}

export default moviesCtrl
