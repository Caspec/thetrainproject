const express = require('express')
const router = express.Router()
const getConnection = require('./mysqlconnection.js')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: 'false' }));
router.use(bodyParser.json())

// Gets one user by ID
router.get("/user/:id", (req, res) => {
    console.log("log --> Fetching user id: " + req.params.id)
    const userId = req.params.id
    const queryString = "SELECT * FROM user WHERE user_id = ?"
    getConnection().query(queryString, [userId], (err, rows, fields) => {
        if (err) {
            console.log("log --> Failed to query: /user/:id " + err)
            res.sendStatus(500)
            return
        }
        console.log("log --> SELECT: /user/:id fetched successfully")
        res.json(rows)
    })
})

// Gets all users
router.get("/users", (req, res) => {
    console.log("log --> Get all users: /users")
    const queryString = "SELECT * FROM user"
    getConnection().query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("log --> Failed to query: /users " + err)
            res.sendStatus(500)
            return
        }
        console.log("log --> SELECT: /users fetched successfully")
        res.json(rows)
    })
})

// Post new user
router.post("/create_user", (req, res) => {
    const username = req.body.user_name.toString();
    const password = req.body.user_password.toString();
    const queryString = "INSERT INTO `user` (user_name, user_password) VALUES (?, ?);"
    getConnection().query(queryString, [username, password], (err, results) => {
        if (err) {
            console.log("log --> Failed to query: /user_create " + err)
            res.sendStatus(500)
            return
        }
        console.log("log --> create new user: /user_create created successfully")
        res.end()
    })
})

// login for admin
router.post("/login", (req, res) => {
    const username = req.body.user_name.toString();
    const password = req.body.user_password.toString();
    if(username && password) {
    const queryString = "SELECT * FROM user WHERE user_name = ? AND user_password = ?"
    getConnection().query(queryString, [username, password], (err, results, fields) => {
        if(results.length > 0) {
            console.log("log --> login admin: /login successfully... user found in DB")
            console.log("log --> username: " + username +  " password: " + password)
            res.sendStatus(200)
        }
        else{
            console.log("log --> User does not exist")
            res.sendStatus(404)
        }
        if (err) {
            console.log("log --> Failed to query: /login " + err)
            res.sendStatus(500)
            return
        }
        res.end()
    })
    }
    else 
    {
        console.log("log --> login admin: /login please enter username and password correct")
        res.sendStatus(404)
    }
})


module.exports = router