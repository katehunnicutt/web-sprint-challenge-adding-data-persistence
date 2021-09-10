// build your `Task` model here
const db = require("../../data/dbConfig")
async function getTasks() {
  return db("tasks as t")
    .join("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id", 
      "t.task_description", 
      "t.task_notes", 
      "t.task_completed", 
      "p.project_name", 
      "p.project_description"
      )
}

async function createTask(task){
  const [task_id] = await db('tasks').insert(task)
  return {
    ...task, task_completed: task.task_completed ? true : false
  }

}

module.exports = {
  getTasks,
  createTask
}