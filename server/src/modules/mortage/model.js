const { fetchData } = require('../../utils/postgres')

const Mortage = `
  SELECT * FROM mortage
`

const getMortage = () => fetchData(Mortage)

module.exports = {
	getMortage
}
