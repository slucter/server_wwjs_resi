const { db } = require("../config")

const user = {}

user.getAll = (payload) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM customer",
        (err, res) => {

            if (!err) return resolve(res)
            reject(new Error(err))
        })
    })
}

user.create = (payload) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO customer SET ? ", payload, 
        (err, res) => {

            if (!err) return resolve(res)
            reject(new Error(err))
        })
    })
}

user.update = (payload, id) => {
    console.log(id);
    return new Promise((resolve, reject) => {
        db.query("UPDATE customer SET ? WHERE id_transaksi = ?", [payload, id], 
        (err, res) => {

            if (!err) return resolve(res)
            reject(new Error(err))
        })
    })
}

module.exports = user