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

// Post journey
router.post("/create_journey", (req, res) => {
    const journey_checkin = req.body.journey_checkin.toString();
    const journey_checkout = req.body.journey_checkout.toString();
    const journey_longtitudestart = res.body.journey_longtitudestart.toString();
    const journey_latitudestart = res.body.journey_latitudestart.toString();
    const journey_longtitudeend = res.body.journey_longtitudeend.toString();
    const journey_latitudeend = res.body.journey_latitudeend.toString();

    const queryString = "INSERT INTO `journey` (journey_checkin, journey_checkout, journey_longtitudestart, journey_latitudestart, journey_longtitudeend, journey_latitudeend) VALUES (?, ?, ?, ?, ?, ?);"
    getConnection().query(queryString, [journey_checkin, journey_checkout, journey_longtitudestart, journey_latitudestart, journey_longtitudeend, journey_latitudeend], (err, results) => {
        if (err) {
            console.log("log --> Failed to query: /create_journey " + err)
            res.sendStatus(500)
            return
        }
        console.log("log --> create new user: /create_journey created successfully")
        res.end()
    })
})

module.exports = router