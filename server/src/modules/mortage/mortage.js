const model = require('./model')

module.exports = {
	GET: async (req, res) => {
		try {
			res.send(await model.getMortage())
		} catch (err) {
			console.log(err.message)
			res.sendStatus(500)
		}
	}
}
