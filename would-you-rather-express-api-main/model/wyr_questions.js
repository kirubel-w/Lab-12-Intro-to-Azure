// Array of Would You Rather questions and their answer choices
// Each object stores the question text and the two choices shown on the page.
const questions = [
    {
        'question': 'Live in a house shaped like a triangle or a house shaped like a circle?',
        'answer1': 'Triangle house',
        'answer2': 'Circle house'
    },
    {
        'question': 'Have a cat-sized elephant or an elephant-sized cat?',
        'answer1': 'Cat-sized elephant',
        'answer2': 'Elephant-sized cat'
    },
    {
        'question': 'Be able to fly or be able to breathe underwater?',
        'answer1': 'Fly',
        'answer2': 'Breath underwater'
    },
    {
        'question': 'Play any musical instrument or speak any language?',
        'answer1': 'Play any musical instrument',
        'answer2': 'Speak any language'
    },
    {
        'question': 'Be a famous movie star or a famous scientist?',
        'answer1': 'Famous movie star',
        'answer2': 'Famous scientist'
    },
]

// Function to select and return a random question
function randomWyrQuestion() {
    // Generate a random index within the questions array
    // Math.floor rounds down to a whole number from 0 to questions.length - 1.
    const randomIndex = Math.floor(Math.random() * questions.length)

    // Get the question at the randomly selected index
    const randomQuestion = questions[randomIndex]

    // Return the selected question object
    return randomQuestion
}

// Export the function so it can be used in other files
// The Express API route can call this function when it receives a request.
module.exports = randomWyrQuestion
