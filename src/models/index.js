import sequelize from '../config/database.js'
import bcrypt from 'bcrypt'

import Character from './characterModel.js'
import Genre from './genreModel.js'
import Movie from './movieModel.js'
import CharacterMovie from './characterMovieModel.js'
import User from './userModel.js'

Movie.hasMany(CharacterMovie, { foreignKey: 'movieId' })
Character.hasMany(CharacterMovie, { foreignKey: 'characterId' })

Genre.hasMany(Movie, { foreignKey: 'genreId' })

;(async () => {
  await sequelize.sync({ force: true })
  console.log('Database & tables created!')

  await Genre.create({
    image: 'https://www.caracteristicas.pro/wp-content/uploads/2019/11/Caracteristicas-de-las-novelas-de-aventuras.jpg',
    name: 'Adventure'
  })

  await Genre.create({
    image: 'https://conceptodefinicion.de/wp-content/uploads/2016/03/Fantas%C3%ADa.jpg',
    name: 'Fantasy'
  })

  const hashPass = bcrypt.hashSync('testtest', 8)

  await User.create({
    email: 'test@gmail.com',
    password: hashPass
  })

  await Character.create({
    image: 'https://static.wikia.nocookie.net/disney/images/a/a5/I2_-_Dash.png/revision/latest?cb=20180609164216&path-prefix=es',
    name: 'Dash',
    age: 10,
    weight: 45000,
    history: 'Dashiell is a very rebellious boy, he often gets into trouble and loves to play pranks on his least favorite teacher, Mr. Bernie Kropp. He believes that he should use his superpowers; his mother, Helen Parr / Elastigirl, disagrees. His goal is to compete in sports: his speed power would make him special, but it would give him an unfair advantage and supers have to keep his powers a secret. His mother forbids it on the grounds that "Everyone is special" (which is, as Dash pointed out, the equivalent of saying "No one is").'
  })

  await Character.create({
    image: 'https://static.wikia.nocookie.net/disney/images/8/8c/I2_-_Violet.png/revision/latest?cb=20180609164253&path-prefix=es',
    name: 'Elastigirl',
    age: 14,
    weight: 50000,
    history: 'Violeta Parr, the oldest of the siblings, is an introverted and intelligent 14-year-old girl who doesnt quite fit in with normal people. Weird, talkative and full of sarcasm, Violeta is the perfect teenager, keeping her superpowers of invisibility and force field creation a secret.'
  })

  await Movie.create({
    image: 'https://static.wikia.nocookie.net/disney/images/8/8c/Incredibles.png/revision/latest/scale-to-width-down/337?cb=20140514144650&path-prefix=es',
    title: 'the incredibles',
    creationDate: '2004/12/02',
    rating: 4,
    genreId: 1
  })

  await CharacterMovie.create({
    characterId: 1,
    movieId: 1
  })

  await CharacterMovie.create({
    characterId: 2,
    movieId: 1
  })

  await Character.create({
    image: 'https://static.wikia.nocookie.net/disney/images/a/a5/I2_-_Dash.png/revision/latest?cb=20180609164216&path-prefix=es',
    name: 'Ariel',
    age: 16,
    weight: 55000,
    history: 'In the depths of the sea, lived a little mermaid named Ariel. She loved exploring her underwater world together with her friend Flounder, but she dreamed of living on the surface. Ariel was always looking for human treasures.'
  })

  await Movie.create({
    image: 'https://static.wikia.nocookie.net/disneyypixar/images/b/b7/The_Little_Mermaid_Poster.jpg/revision/latest/scale-to-width-down/323?cb=20200803001021&path-prefix=es',
    title: 'the little mermaid',
    creationDate: '1989/12/07',
    rating: 3,
    genreId: 2
  })

  await CharacterMovie.create({
    characterId: 3,
    movieId: 2
  })
})()

export { Movie, Character, Genre, CharacterMovie, User }
