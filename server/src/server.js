require('dotenv').config()
const express = require('express')
const cors = require('cors')

const router = require('./modules')

const app = express()

app.use(express.json())
app.use(cors())

app.use(router)

app.use('/*', (_, res) =>
	res.status(404).send('Uka nima qib adashib yuribsan bu yerlarda')
)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
