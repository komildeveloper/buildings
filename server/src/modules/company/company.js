const model = require('./model')

module.exports = {
	GET: async (req, res) => {
		try {
			res.json(await model.getCompany())
		} catch (err) {
			console.log(err.message)
			res.sendStatus(500)
		}
	}
}
