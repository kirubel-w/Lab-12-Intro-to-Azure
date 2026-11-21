
// Import Express to create the web server
const express = require('express')

// Import the router that handles requests for different routes
const apiRouter = require('./routes/api')

// Create an Express application
const app = express()

app.use('/', express.static('client'))

// Use the imported router to handle requests starting at '/'
app.use('/api', apiRouter)

// Start the server on the assigned port or port 3000
let server = app.listen(process.env.PORT || 3000, function () {
    console.log('Express server running on port', server.address().port)
})
