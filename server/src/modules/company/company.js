const model = require('./model')

module.exports = {
	GET: async (req, res) => {
		try {
			res.json(await model.getBooks())
		} catch (err) {
			console.log(err.message)
			res.sendStatus(500)
		}
	}
}
