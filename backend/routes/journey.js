const express = require('express')
const router = express.Router()
const getConnection = require('./mysqlconnection.js')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: 'false' }));
router.use(bodyParser.json())

// Gets one journey by ID
router.get("/journey/:id", (req, res) => {
    console.log("log --> Fetching journey id: " + req.params.id)
    const journeyId = req.params.id
    const queryString = "SELECT * FROM journey WHERE journey_id = ?"
    getConnection().query(queryString, [journeyId], (err, rows, fields) => {
        if (err) {
            console.log("log --> Failed to query: /journey/:id " + err)
            res.sendStatus(500)
            return
        }
        console.log("log --> SELECT: /journey/:id fetched successfully")
        res.json(rows)
    })
})

// Gets all journeys
router.get("/journeys", (req, res) => {
    console.log("log --> Get all journeys: /journeys")
    const queryString = "SELECT * FROM journey"
    getConnection().query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("log --> Failed to query: /journeys " + err)
            res.sendStatus(500)
            return
        }
        console.log("log --> SELECT: /journeys fetched successfully")
        res.json(rows)
    })
})

module.exports = router