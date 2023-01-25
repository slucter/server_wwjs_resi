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
    // console.log(req.body)
    try {
        const submit = await model.user.create(req.body)
        console.log(req)
        respond(200, 'Success Get User', null, res)
    } catch (error) {
        respond(401, error, null, res)
        console.log(error)
    }
}

user.update = async (req, res) => {
    // console.log(req.body)
    try {
        const submit = await model.user.update(req.body, req.params.id)
        // console.log(req)
        respond(200, 'Success Update User', null, res)
    } catch (error) {
        respond(401, error, null, res)
        // console.log(error)
    }
}

module.exports = user