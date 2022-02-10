const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})



app.use(express.json())
app.use(cors())
app.use(express.static('public'))

app.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 4005

app.listen(port, () => console.log(`server running on ${port}`))