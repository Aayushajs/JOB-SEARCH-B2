import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image:
  {
    type: String,
    required: true
  },
  createdAt:
  {
    type: Date,
    default: Date.now
  },
  youtubeLink:
  {
    type: String,
    require: false
  },
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

export default Course;
