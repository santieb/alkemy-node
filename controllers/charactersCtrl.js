import Characters from '../models/characterModel.js'

const charactersCtrl = {
  getCharacters: async (req, res) => {
    try {
    const characters = await Characters.findAll({
      attributes: ['image', 'name']
    })

    res.status(200).json({ msg: characters })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
  getCharacter: async (req, res) => {
    try {
      const { id } = req.params

      const character = await Characters.findByPk(id)

      if (!character)
        return res.status(400).json({ msg: 'Character not found' })

      res.status(200).json({ msg: character })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
  createCharacter: async (req, res) => {
    try {
      const { image, name , age, weight, history } = req.body

      if (!image || !name || !age || !weight || !history)
        return res.status(400).json({ msg: 'Please fill in all fields' })

      const user = await new Characters({ image, name , age, weight, history })
      await user.save()

      res.status(200).json({ msg: 'Character created successfully' })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
  updateCharacter: async (req, res) => {
    try {
      const { id } = req.params
      const { image, name , age, weight, history } = req.body

      if (!image && !name && !age && !weight && !history) 
        return res.status(400).json({ msg: 'Please fill in all fields' })

      const character = await Characters.findByPk(id)

      if (!character)
        return res.status(400).json({ msg: 'Character not found' })

      character.image = image || character.image
      character.name = name || character.name
      character.age = age || character.age
      character.weight = weight || character.weight
      character.history = history || character.history

      await character.save()

      res.status(200).json({ msg: 'Character updated successfully' })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }

  },
  deleteCharacter: async (req, res) => {
    try {
      const { id } = req.params

      const character = await Characters.findByPk(id)
  
      if (!character)
        return res.status(400).json({ msg: 'Character not found' })
  
      await character.destroy()

      res.status(200).json({ msg: 'Character deleted successfully' })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  }
}

export default charactersCtrl