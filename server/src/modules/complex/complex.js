const model = require('./model')

module.exports = {
	GET: async (req, res) => {
		try {
			res.send(await model.getComplex())
		} catch (err) {
			console.log(err.message)
			res.sendStatus(500)
		}
	}
}
