// build your `Project` model here
const db = require("../../data/dbConfig")

async function getProjects(){
  return db('projects')
}

module.exports = {
  getProjects
}
