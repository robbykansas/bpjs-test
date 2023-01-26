const express = require('express')
const router = express.Router()
const { WorkingExperienceService } = require('../services')
const workingExperienceService = new WorkingExperienceService()

router.get('/:profileCode', async (req, res) => {
  const { profileCode } = req.params
  const result = await workingExperienceService.getWorkingExperience(profileCode)

  res.send(result)
})

router.put('/:profileCode', async (req, res) => {
  const { profileCode } = req.params
  const { workingExperience } = req.body
  const result = await workingExperienceService.updateWorkingExperience({ profileCode, workingExperience })

  res.send(result)
})

module.exports = router