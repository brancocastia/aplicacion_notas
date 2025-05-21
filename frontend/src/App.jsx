import { useEffect, useState } from 'react'
import axios from 'axios'

const API = 'http://localhost:3001/api/notes'

function App() {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')

  const fetchNotes = async () => {
    const res = await axios.get(API)
    setNotes(res.data)
  }

  const createNote = async () => {
    await axios.post(API, { title })
    setTitle('')
    fetchNotes()
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <div>
      <h1>Notas</h1>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={createNote}>Crear</button>
      <ul>
        {notes.map(note => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
