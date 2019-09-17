// imports for backend express

const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const userRouter = require('./routes/user.js')
const journeyRouter = require('./routes/journey.js')

//app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(morgan('short'))
app.use(cors())
app.use(bodyParser.json())

app.use(userRouter)
app.use(journeyRouter)



// root dir
app.get("/", (req, res) => {
    console.log("Respond to root route")
    res.send("Hello from root!!")
})

// localhost:3001
app.listen(3001, () => {
    console.log('Server is up on port 3001...')
})