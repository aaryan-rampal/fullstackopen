import { useState } from 'react'

const Persons = ({filteredPersons}) => {
  return (
    <div>
      {filteredPersons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}
const Filter = ({ filteredValue, handleFilter }) => {
  return (
    <form>
      <div>
        search name<input value={filteredValue} onChange={handleFilter} />
      </div>
    </form>
  )
}

const PersonForm = ({ newName, handleNameChange, newNumber, handleNumberChange, addEntry }) => {
  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button onClick={addEntry} type="submit">add</button>
      </div>
    </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredValue, setFilteredValue] = useState('')

  const addEntry = (event) => {
    event.preventDefault()
    console.log(event)
    const newPerson = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
      setNewNumber('')
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilteredValue(event.target.value)
    console.log(filteredPersons)
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filteredValue.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} filteredValue={filteredValue}></Filter>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange} addEntry={addEntry}></PersonForm>
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons}></Persons>
    </div>
  )
}

export default App