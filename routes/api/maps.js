const express = require('express')
const router = express.Router()
const mapsCtrl = require('../../controllers/api/maps')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/:id', ensureLoggedIn, mapsCtrl.viewAll)

router.post('/new', mapsCtrl.saveMap)

router.post('/delete', mapsCtrl.deleteOne)


module.exports = router

