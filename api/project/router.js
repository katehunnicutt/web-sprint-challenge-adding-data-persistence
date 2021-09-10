// build your `/api/projects` router here
const router = require("express").Router()

router.use("*", (req, res) => {
  res.json({api: " project be up"})
})

router.use((err, req, res, next) => { //eslint-disable-line
  res.status(500).json({
    customMessage: 'something bad inside project router',
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router