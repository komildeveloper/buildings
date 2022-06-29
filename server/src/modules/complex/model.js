const { fetchData } = require('../../utils/postgres')

const Complex = `
  SELECT * FROM complex
`

const getComplex = () => fetchData(Complex)

module.exports = {
	getComplex
}
