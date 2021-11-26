const express = require('express')
const parser = require('body-parser')
const app = express()
const port = 3000

const loginRouter = require('./loginRouter')
const staticFileRoute = express.static('public')

app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))

app.use(staticFileRoute)
app.use('/user', loginRouter)

app.listen(port, () => {
    console.log(`Server started and listening to ${port}`)
})
