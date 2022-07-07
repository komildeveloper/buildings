const { verify } = require('jsonwebtoken')

module.exports = async (req, res, next) => {
	try {
		const jwtToken = await req.header('token')

		if (!jwtToken) {
			return res.status(403).json({ msg: 'Not Authorize' })
		}

		const payload = verify(jwtToken, process.env.JWT_SECRET)

		req.user = payload.user
	} catch (err) {
		console.error(err.message)
		return res.status(403).json({ msg: 'Not Authorize' })
	}
	next()
}
