// build your `Project` model here
const db = require("../../data/dbConfig")

async function getProjects(){
  const projects = await db("projects")
  return projects.map(project => {
    return{
      ...project,
      project_completed: project.project_completed ? true : false
    }
  })
}

async function createProject(project){
  const [project_id] = await db('projects').insert(project)
  
  return {
    ...project, project_completed: project.project_completed ? true : false
  }


}

module.exports = {
  getProjects,
  createProject
}
