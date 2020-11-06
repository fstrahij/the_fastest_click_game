const Pool = require('pg').Pool
const pool = new Pool({
	user: process.env.D_USER,
	host: process.env.D_HOST,
	database: process.env.D_DATABASE,
	password: process.env.D_PASSWORD,
	port: process.env.D_PORT,
})

const getTopFivePlayers = (request, response) => {
	const queryString = 'SELECT name, score FROM scoreboard ORDER BY score DESC LIMIT 5'
	pool.query(queryString, (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).json(results.rows)
	})
}

const createPlayer = (request, response) => {
	const { name, score } = request.body
	const queryString = 'INSERT INTO scoreboard(name, score) VALUES($1, $2)'
	pool.query(queryString, [name, score], (error, results) => {
		if (error) {
			throw error
		}
		response.status(201).send('Player added with success\n')
	})
}

module.exports = {
	getTopFivePlayers,
	createPlayer,
}