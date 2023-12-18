const mongoose = require('mongoose')
//const faker = require('faker')
const config = require('./utils/config')
const Note = require('./models/note')

/* if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
} */

const url = config.MONGODB_URI

mongoose.set('strictQuery',false)
mongoose.connect(url)

const note = new Note({
  content: 'HTML is Easy',
  important: true,
})

note.save().then( () => {
  console.log('note saved!')
  mongoose.connection.close()
})

const note2 = new Note({
  content: 'This is another note',
  important: true,
})

note2.save().then( () => {
  console.log('note saved!')
  mongoose.connection.close()
})