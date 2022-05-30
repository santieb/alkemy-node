import { Movie, CharacterMovie } from '../models/index.js'

const moviesCtrl = {
  getMovies: async (req, res) => {
    try {
      const { title, genre, order } = req.query

      if (order !== 'ASC' && order !== 'DESC')
        return res.status(400).json({ msg: 'Invalid order' })

      const query = {}
      if (title) query.title = title
      if (genre) query.genreId = genre

      const movies = await Movie.findAll({
        where: query,
        attributes: ['image', 'title', 'creationDate'],
        order: [['creationDate', order]]
      })

      if (!movies || movies.length === 0)
        return res.status(400).json({ msg: 'characters not found' })

      res.status(200).json({ msg: movies })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
  getMovie: async (req, res) => {
    try {
      const { id } = req.params

      const movie = await Movie.findByPk(id, {
        include: [
          {
            model: CharacterMovie,
            attributes: ['characterId']
          }
        ]
      })

      if (!movie)
        return res.status(400).json({ msg: 'movie not found' })

      res.status(200).json({ msg: movie })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
  createMovie: async (req, res) => {
    try {
      const { image, title, creationDate, rating, genreId } = req.body

      if (!image || !title || !creationDate || !rating || !genreId)
        return res.status(400).json({ msg: 'Please fill in all fields' })

      const movie = await new Movie({ image, title, creationDate, rating, genreId })
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
        return res.status(404).json({ msg: 'Movie not found' })

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
        return res.status(404).json({ msg: 'Movie not found' })

      await movie.destroy()

      res.status(200).json({ msg: 'Movie deleted successfully' })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
  addCharacter: async (req, res) => {
    try {
      const { id } = req.params
      const { characterId } = req.body

      const characterMovie = await CharacterMovie.findOne({
        where: {
          movieId: id,
          characterId
        }
      })

      if (characterMovie)
        return res.status(400).json({ msg: 'Character already added' })

      await CharacterMovie.create({ movieId: id, characterId })

      res.status(200).json({ msg: 'Characters added successfully' })
    } catch (error) {
      return res.status(500).json({ msg: 'Check the sent data' })
    }
  },
  unassignCharacter: async (req, res) => {
    try {
      const { id } = req.params
      const { characterId } = req.body

      const characterMovie = await CharacterMovie.findOne({
        where: {
          movieId: id,
          characterId
        }
      })

      if (!characterMovie)
        return res.status(400).json({ msg: 'The character is not added' })

      await characterMovie.destroy()

      res.status(200).json({ msg: 'Characters deleted successfully' })
    } catch (error) {
      return res.status(500).json({ msg: 'Check the sent data' })
    }
  }
}

export default moviesCtrl
