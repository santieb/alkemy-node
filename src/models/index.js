import sequelize from '../config/database.js'

import Character from './characterModel.js'
import Genre from './genreModel.js'
import Movie from './movieModel.js'
import CharacterMovie from './characterMovieModel.js'
import User from './userModel.js'

Movie.hasMany(CharacterMovie, { foreignKey: 'movieId' })
Character.hasMany(CharacterMovie, { foreignKey: 'characterId' })

Genre.hasMany(Movie, { foreignKey: 'genreId' })

;(async () => {
  await sequelize.sync()
  console.log('Database & tables created!')
})()

export { Movie, Character, Genre, CharacterMovie, User }
