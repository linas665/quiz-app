import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OptionSchema = new Schema({
  optionText: {
    type: String,
    required: true
  },
  isCorrect: {
    type: Boolean,
    required: true
  }
});

const QuestionSchema = new Schema({
  questionText: {
    type: String,
    required: true
  },
  options: {
    type: [OptionSchema],
    validate: {
      validator: function(v) {
        return v.length === 4;
      },
      message: 'A question must have exactly 4 options.'
    },
    required: true
  }
});

export default mongoose.model('Question', QuestionSchema);