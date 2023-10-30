const express = require('express')
const router = express.Router()
const foesCtrl = require('../../controllers/api/foes')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/:id', ensureLoggedIn, foesCtrl.viewFoes)

router.post('/new', foesCtrl.saveFoe)


module.exports = router

