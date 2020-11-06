require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(express.static("public"))
app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
)

const corsConfig = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', true)
	res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
	next()
}
app.use(corsConfig);

app.get('/', (request, response) => {
	response.json({ info: 'Node.js, Express, and Postgres API'})
})
app.listen(process.env.PORT || port, () => {
	console.log(`App running on port ${port}.`)
})
app.get('/scoreboard', db.getTopFivePlayers)
app.post('/newPlayer', db.createPlayer)