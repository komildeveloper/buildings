const { fetchData } = require('../../utils/postgres')

const Banks = `
  SELECT * FROM banks
`

const getBanks = () => fetchData(Banks)

module.exports = {
	getBanks
}
