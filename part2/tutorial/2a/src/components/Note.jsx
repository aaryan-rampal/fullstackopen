const Note = ({ note }) => {
  return (
    <li>{note.content}: {note.important.toString()}</li>
  )
}

export default Note