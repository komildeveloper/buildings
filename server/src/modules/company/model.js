const { fetchData } = require('../../utils/postgres')

const Company = `
  SELECT * FROM company
`

const getCompany = () => fetchData(Company)

module.exports = {
	getCompany
}
