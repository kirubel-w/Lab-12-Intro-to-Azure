
// Import Express to create routes for the app
const express = require('express')

// Create an Express router to handle HTTP requests
const router = express.Router()

// Import the function that generates a random Would You Rather question
const randomWyrQuestion = require('../model/wyr_questions')

// Handle GET requests to the home page
router.get('/', function (req, res, next) {
    // Send a placeholder message as the response
    res.send('Placeholder for home page')
})

// Handle GET requests to the /wyr API endpoint
router.get('/wyr', function (req, res, next) {

    // Call the function to get a random question
    const wyr = randomWyrQuestion()

    // Send the selected question as a JSON response
    res.json(wyr)
})

// Export the router so it can be used by the Express server
module.exports = router
