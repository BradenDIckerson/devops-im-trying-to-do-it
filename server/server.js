const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
require('dotenv').config()

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})
rollbar.log('hello world!')

const ad = ['button']

app.use(express.json())
app.use(cors())
app.use(express.static('public'))


    rollbar.warning(`Someone pushed the${ad}`)
    rollbar.error('nobody pushed the button.')





app.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || process.env.SERVER_PORT 

app.listen(port, () => console.log(`server running on ${port}`))