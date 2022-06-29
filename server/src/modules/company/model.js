const { fetchData } = require('../../utils/postgres')

const Company = `
  SELECT * FROM company
`

const getBooks = () => fetchData(Company)

module.exports = {
	getBooks
}
