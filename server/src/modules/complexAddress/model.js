const { fetchData } = require('../../utils/postgres')

const ComplexAddress = `
  SELECT * FROM complex_address
`

const getComplexAddress = () => fetchData(ComplexAddress)

module.exports = {
	getComplexAddress
}
