// build your `/api/tasks` router here
const router = require("express").Router()

router.use("*", (req, res) => {
  res.json({api: "task be up"})
})

router.use((err, req, res, next) => { //eslint-disable-line
  res.status(500).json({
    customMessage: 'something bad inside task router',
    message: err.message,
    stack: err.stack,
  })
})


module.exports = router