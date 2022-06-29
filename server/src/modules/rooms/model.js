const { fetchData } = require('../../utils/postgres')

const Rooms = `
  SELECT * FROM rooms
`

const getRooms = () => fetchData(Rooms)

module.exports = {
	getRooms
}
