const pg = require('pg')
const router = require('express').Router()
const authorization = require('../middleware/authorization')

const pool = new pg.Pool({
	connectionString:
		'postgres://gywwfblr:hkNsbby-Qs128RpeSyvAOMcKYk05p46I@arjuna.db.elephantsql.com/gywwfblr'

	/* connectionString: 'postgres://postgres:komil008I@localhost:5432/buildings', */
})

router.get('/', authorization, async (req, res) => {
	try {
		// req.user has the payload
		// res.json(req.user)

		const users = await pool.query(
			'SELECT user_name, user_email FROM users WHERE user_id = $1',
			[req.user]
		)

		res.json({
			user: users.rows[0]
		})
	} catch (err) {
		console.error(err.message)
		res.status(500).json('Server error')
	}
})

module.exports = router
