const express = require('express')
const router = express.Router()
const profileRoutes = require('./profileRoutes')
const photoRoutes = require('./photoRoutes')
const workingExperienceRoutes = require('./workingExperienceRoutes')
const employmentRoutes = require('./employmentRoutes')
const educationRoutes = require('./educationRoutes')
const skillRoutes = require('./skillRoutes')

router.use('/api/profile', profileRoutes)
router.use('/api/photo', photoRoutes)
router.use('/api/working-experience', workingExperienceRoutes)
router.use('/api/employment', employmentRoutes)
router.use('/api/education', educationRoutes)
router.use('/api/skill', skillRoutes)

module.exports = router