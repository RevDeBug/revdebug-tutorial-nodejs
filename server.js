const express = require('express')
const app = express()

app.use(express.json())
const subscribersRouter = require('./routes/subscribers')
app.use('/', subscribersRouter)


app.listen(3000, () => console.log('server started'))

