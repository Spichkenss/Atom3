
const Router = require('express')
const router = new Router()

const UserRouter = require('./UserRouter')

router.use('/auth', UserRouter)

module.exports = router