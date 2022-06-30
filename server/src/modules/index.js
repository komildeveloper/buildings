const router = require('express').Router()
const Company = require('./company/company')
const Complex = require('./complex/complex')
const ComplexAddress = require('./complexAddress/complexAddress')
const Rooms = require('./rooms/rooms')
const Banks = require('./banks/banks')
const Mortage = require('./mortage/mortage')

router
	.get('/company', Company.GET)
	.get('/complex', Complex.GET)
	.get('/complex-address', ComplexAddress.GET)
	.get('/rooms', Rooms.GET)
	.get('/banks', Banks.GET)
	.get('/mortage', Mortage.GET)

module.exports = router
