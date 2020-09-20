const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send(
        `<html>
            <head>
            <title> hello </title>
            <body>
            <h1>first lesson</h1>
            <p>hello world</p>
            </body>
            </head>
        </html>
      `
    )
})

app.listen(port)