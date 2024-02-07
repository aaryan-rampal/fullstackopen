const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.static('dist'))
app.use(cors())

let notes = [
	{
		id: 1,
		content: "HTML is easy",
		important: true
	},
	{
		id: 2,
		content: "Browser can execute only JavaScript",
		important: false
	},
	{
		id: 3,
		content: "GET and POST are the most important methods of HTTP protocol",
		important: true
	}
]

const requestLogger = (req, res, next) => {
	console.log('Method: ', req.method)
	console.log('Path: ', req.path)
	console.log('Body: ', req.body)
	console.log('---')
	next()
}

  
app.use(requestLogger)


app.get('/', (request, response) => {
	response.send('<h1>Hello World</h1><a href=\'api/notes\'>notes</a>')
})

app.get('/api/notes', (request, response) => {
	response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
	const id = Number(request.params.id)
	const note = notes.find(note => note.id === id)
	if (note) {
		response.json(note)
	} else {
		response.statusMessage = "No such ID exists"
		response.status(404).end()
	}
})

app.delete('/api/notes/:id', (req, res) => {
	const id = Number(req.params.id)
	notes = notes.filter(note => note.id != id)

	res.status(204).end()
})

app.put('/api/notes/:id', (req, res) => {
	newNote = req.body
	//console.log(newNote)
	notes = notes.map(note => note.id === req.body.id ? newNote : note)
	//console.log(notes)
	res.json(newNote)
})

app.post('/api/notes/', (req, res) => {
	// console.log(Math.max(notes.map(n => n.id)))
	// console.log(...notes.map(n => n.id))

	const body = req.body

	if (!body.content) {
		return res.status(400).json({
			error: 'content missing'
		})
	}

	const note = {
		content: body.content,
		important: Boolean(body.important) || false,
		id: generateID()
	}

	notes = notes.concat(note)
	res.json(note)
})

const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})

const generateID = () => {
	const maxId = notes.length > 0
		? Math.max(...notes.map(n => n.id))
		: 0
	return maxId + 1
}

