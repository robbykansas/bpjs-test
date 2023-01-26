const express = require('express')
const router = express.Router()
const { EducationService } = require('../services')
const educationServices = new EducationService()

router.get('/:profileCode', async (req, res) => {
  const { profileCode } = req.params
  const result = await educationServices.getEducation(profileCode)
  res.send(result)
})

router.post('/:profileCode', async (req, res) => {
  const { profileCode } = req.params
  const education = req.body
  const result = await educationServices.createEducation({ profileCode, education })
  res.send(result)
})

router.delete('/:profileCode', async (req, res) => {
  const { profileCode } = req.params
  const { id } = req.query
  const result = await educationServices.deleteEducation({ profileCode, id })

  res.send(result)
})

module.exports = router