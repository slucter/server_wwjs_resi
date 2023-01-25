const { respond } = require('../helper')
const model = require('../model/index')

const user = {}

user.getAll = async (req, res) => {
    try {
        const users = await model.user.getAll()
        respond(200, 'Success Get User', users, res)
        
    } catch (error) {
        respond(401, error, null, res)
    }
}

user.create = async (req, res) => {
    try {
        const submit = await mode.user.create(req.body)
        respond(200, 'Success Get User', users, res)
    } catch (error) {
        respond(401, error, null, res)
    }
}

module.exports = user