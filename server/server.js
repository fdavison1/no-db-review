require('dotenv').config()
const express = require('express')
const {PORT} = process.env
const ctrl = require('./controllers/controller')

const app = express()
app.use(express.json())

//endpoints
app.post('/api/pokemon', ctrl.catch)
app.get('/api/pokemon', ctrl.getPokeDex)
app.put('/api/pokemon/:id', ctrl.rename)
app.delete('/api/pokemon/:id', ctrl.release)

app.listen(PORT, ()=> console.log(`${PORT} ducks marching on Rome.`))
