import express from 'express'
import Note from '../models/note.model.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const notes = await Note.findAll()
  res.json(notes)
})

router.post('/', async (req, res) => {
  const note = await Note.create(req.body)
  res.json(note)
})

router.put('/:id', async (req, res) => {
  const note = await Note.findByPk(req.params.id)
  await note.update(req.body)
  res.json(note)
})

router.delete('/:id', async (req, res) => {
  const note = await Note.findByPk(req.params.id)
  await note.destroy()
  res.sendStatus(204)
})

export default router
