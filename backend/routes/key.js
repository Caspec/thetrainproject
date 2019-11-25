const express = require('express')
const router = express.Router()
const getConnection = require('./mysqlconnection.js')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: 'false' }));
router.use(bodyParser.json())

// Gets key
router.get("/key", (req, res) => {
    console.log("log --> key: /key")
    const queryString = "SELECT * FROM `key`"
    getConnection().query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("log --> Failed to query: /key " + err)
            res.sendStatus(500)
            return
        }
        console.log("log --> SELECT: /key fetched successfully")
        res.json(rows)
    })
})

module.exports = router