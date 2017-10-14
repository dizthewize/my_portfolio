const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  tech: {type: String, required: true}
});

const projectModel = mongoose.model('projects', projectsSchema);
projectModel.createProject = createProject;
projectModel.findProjectByID = findProjectByID;
projectModel.findAllProjects = findAllProjects;
