const { db } = require("../config")

const user = {}

user.getAll = (payload) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT book.title, book_category.category FROM book INNER JOIN book_category ON book.id_category = book_category.id_category",
        (err, res) => {

            if (!err) return resolve(res)
            reject(new Error(err))
        })
    })
}

user.create = (payload) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO book VALUES ? ", payload, 
        (err, res) => {

            if (!err) return resolve(res)
            reject(new Error(err))
        })
    })
}

module.exports = user