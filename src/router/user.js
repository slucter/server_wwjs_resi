const express = require('express')
const Route = express.Router()
const { user } = require('../controller/index')

Route
    .get('/', user.getAll)
    .post('/', user.create)
    .put('/:id', user.update)

module.exports = Route