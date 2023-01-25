module.exports = {
    respond : (status, msg, data, res) => {
        const respond = {}

        respond.statusCode = status
        respond.msg = msg
        respond.data = data || null

        return res.status(status).json(respond)
    }
}