const { sign } = require('jsonwebtoken')

const jwtGenerator = user_id => {
	const payload = {
		user: user_id
	}

	return sign(payload, process.env.JWT_SECRET, { expiresIn: '1hr' })
}

module.exports = jwtGenerator
