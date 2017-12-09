const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  tech: {type: String, required: true},
  type: {type: String, required: true},
  gridClass: {type: String, required: true},
  liveUrl: {type: String, required: true},
  imageFile: {type: String, required: true}
});

mongoose.model('projects', projectSchema);
