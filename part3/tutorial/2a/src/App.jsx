import noteService from './services/notes'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Note from "./components/Note";

const App = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    console.log('effect')
    // axios
    //   .get('http://localhost:3001/notes')
    //   .then(response => {
    //     console.log('promise fulfilled')
    //     setNotes(response.data)
    //   })
    noteService.getAll()
      .then(initialNotes => {
        console.log('promise fulfilled')
        setNotes(initialNotes)
      })
  }

  useEffect(hook, [])
  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5
    }

    noteService.create(noteObject)
      .then(newNote => {
        console.log(newNote)
        setNotes(notes.concat(newNote))
        setNewNote('')
      })
  }


  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const switchShow = () => {
    setShowAll(!showAll)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  const toggleImportanceOf = (id) => {
    console.log('importance of ' + id + ' needs to be toggled')
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id == id)
    const changedNote = {...note, important: !note.important}

    noteService.update(note.id, changedNote)
    .then(updatedNote => {
      setNotes(notes.map(n => n.id != id ? n : updatedNote))
    })
    .catch(error => {
      alert(`the note ${note.content} does not exist`)
      setNotes(notes.filter(n => n.id != id))
    })

  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>

      <ul>
        {notesToShow.map(note => <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}></Note>)}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}></input>
        <button type='submit'>save</button>
      </form>

    </div>
  )
}

export default App
