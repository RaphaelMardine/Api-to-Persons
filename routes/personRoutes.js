const router = require('express').Router()
const Person = require('../models/Person')

//Create - Criação de dados
router.post('/', async (req, res) => {
  const { name, salary, approved } = req.body

  if (!name) {
    res.status(422).json({ error: 'O nome é obrigatório!' })
  }
  if (!salary) {
    res.status(422).json({ error: 'O salário é obrigatório!' })
  }
  if (!approved) {
    res.status(422).json({ error: 'O approved é obrigatório!' })
  }

  const person = {
    name,
    salary,
    approved
  }
  // create
  try {
    // criando dados
    await Person.create(person)
    res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

// Read - leitura de dados
router.get('/', async (req, res) => {
  try {
    const people = await Person.find()
    res.status(200).json(people)
  } catch (error) {
    res.status(500).json({ error: error })
  }
})
// Read - leitura de dados especificos
router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const person = await Person.findById(id)
    res.status(200).json(person)
  } catch (error) {
    res.status(500).json({ error: error })
  }
})
// Delete - Exclusão de dados
router.delete('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const person = await Person.findByIdAndDelete(id)
    res.status(200).json(person)
  } catch (error) {
    res.status(500).json({ error: error })
  }
})
// Update - Atualização de dados
router.put('/:id', async (req, res) => {
  const id = req.params.id
  const { name, salary, approved } = req.body
  const person = {
    name,
    salary,
    approved
  }
  try {
    const updatePerson = await Person.findByIdAndUpdate(id, person)
    if (updatePerson.matchedCount === 0) {
      res.status(422).json({ message: 'Usuário não foi encontrado' })
      return
    }
    res.status(201).json(person)
  } catch (error) {
    res.status(500).json({ error: error })
  }
})
module.exports = router
