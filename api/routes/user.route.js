import express from 'express';
import mongoose from 'mongoose';
import Question from '../models/quiz.model.js'

const app = express();

// Route to get all questions
app.get('/questions', async (req, res) => {
    try {
        // Fetch all questions from the database
        const questions = await Question.find();
        
        // Respond with the list of questions
        res.status(200).json(questions);
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: "Error fetching questions", error: error.message });
    }
});

app.post('/add-new-question', async (req, res) => {
    try {
        const { questionText, options } = req.body;

        // Check if all fields are provided
        if (!questionText || !options || !Array.isArray(options) || options.length !== 4) {
            return res.status(400).json({ message: "All fields are required and options must be an array of exactly 4 items."});
        }

        // Check if each option has the required fields
        for (const option of options) {
            if (!option.optionText || typeof option.isCorrect !== 'boolean') {
                return res.status(400).json({ message: "Each option must have 'optionText' and 'isCorrect' fields." });
            }
        }

        // Create a new question
        const newQuestion = new Question({
            questionText,
            options
        });

        // Save the question to the database
        await newQuestion.save();

        // Respond with success
        res.status(201).json({ message: "Question added successfully", question: newQuestion });

    } catch (error) {
        // Handle errors and provide an appropriate response
        res.status(500).json({ message: "Error adding a new question", error: error.message });
    }
});


app.delete('/questions/:id', async (req, res) => {
    try {
        const questionId = req.params.id;

        // Validate the ID format (simple validation)
        if (!mongoose.Types.ObjectId.isValid(questionId)) {
            return res.status(400).json({ message: "Invalid question ID format." });
        }

        // Find and delete the question
        const result = await Question.findByIdAndDelete(questionId);

        if (!result) {
            // If no question was found with the given ID
            return res.status(404).json({ message: "Question not found." });
        }

        // Respond with success
        res.status(200).json({ message: "Question deleted successfully." });
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: "Error deleting question", error: error.message });
    }
});


export default app;