const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.status(200).send('Hello world!')
})

app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`))