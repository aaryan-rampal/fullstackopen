const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'make not important' : 'make important'

  return (
    <li>
      <button onClick={toggleImportance}>{label}</button>
      {note.content}: {note.important.toString()}
    </li>
  )
}

export default Note