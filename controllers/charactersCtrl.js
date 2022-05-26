import Characters from '../models/characterModel.js'

const charactersCtrl = {
  getCharacters: async (req, res) => {
    const users = await Characters.findAll()
    console.log('users:', users)
    res.json('funciona')
  },
  getCharacter: (req, res) => {
      res.send('Get one character')
  }
}

export default charactersCtrl