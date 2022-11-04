// config inicial
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// forma de ler JSON //midlewares
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

// rotas da API

const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'Oi Express!' })
})

mongoose
  .connect(
    `mongodb+srv://admin:admin@cluster0.0tskbzh.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('Conectamos ao MongoDB!')
    app.listen(8080)
  })
  .catch(err => {
    console.log(err)
  })
// const connectToDataBase = async () => {
// }
// entregar uma porta
