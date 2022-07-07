const pg = require('pg')
const bcrypt = require('bcrypt')
const router = require('express').Router()

const jwtGenerator = require('../utils/jwtGenerator')
const validInfo = require('../middleware/validInfo')
const authorization = require('../middleware/authorization')

const pool = new pg.Pool({
	connectionString:
		'postgres://gywwfblr:hkNsbby-Qs128RpeSyvAOMcKYk05p46I@arjuna.db.elephantsql.com/gywwfblr'

	/* connectionString: 'postgres://postgres:komil008I@localhost:5432/buildings', */
})

router
	// Register route
	.post('/register', validInfo, async (req, res) => {
		try {
			// 1. Destructure the req.body (name, email, password)

			const { name, email, password } = req.body

			// 2. Check if user exist(if user exist than throw error)

			const { rows } = await pool.query(
				'SELECT * FROM users WHERE user_email = $1',
				[email]
			)

			if (rows.length !== 0) {
				return res.status(401).send('User already exist')
			}

			// 3. Bcrypt the user password
			const saltRound = 10
			const salt = await bcrypt.genSalt(saltRound)

			const bcryptPassword = await bcrypt.hash(password, salt)

			// 4. Enter the new user inside our database
			const newUser = await pool.query(
				'INSERT INTO users(user_name, user_email, user_password) VALUES($1, $2, $3) RETURNING *',
				[name, email, bcryptPassword]
			)

			// 5. Generating out jwt token
			const token = jwtGenerator(newUser.rows[0].user_id)

			res.json({ token })
		} catch (err) {
			console.log(err.message)
			res.status(500).send('Server error')
		}
	})

	// Login Route
	.post('/login', validInfo, async (req, res) => {
		try {
			// 1. Destructure the req.body
			const { email, password } = req.body

			// 2. Check if user doesn't exist(if not then we throw error)
			const user = await pool.query(
				'SELECT * FROM users WHERE user_email = $1',
				[email]
			)

			if (user.rows.length === 0) {
				return res.status(401).json({ msg: 'Password or Email is incorrect' })
			}

			// 3. Check if incoming password is the same the database password
			const validPassword = await bcrypt.compare(
				password,
				user.rows[0].user_password
			)

			if (!validPassword) {
				return res.status(401).json({ msg: 'Password or Email incorrect' })
			}
			// 4. give them the jwt token
			const token = jwtGenerator(user.rows[0].user_id)

			res.json({ token })
		} catch (err) {
			console.error(err.message)
			res.status(500).send('Server error')
		}
	})

	// Verify Route
	.get('/is-verify', authorization, async (req, res) => {
		try {
			res.json(true)
		} catch (err) {
			console.error(err.message)
			res.status(500).send('Server error')
		}
	})

module.exports = router
