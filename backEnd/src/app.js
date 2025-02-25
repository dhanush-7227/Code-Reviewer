const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const app = express()
const cors = require('cors')
app.use(cors({ origin: "https://code-reviewer-9e7z.onrender.com/" }))
app.use(express.json())


app.get('/', (req, res) => {
    res.send('hello world')
})

app.use('/ai', aiRoutes) 

module.exports = app
