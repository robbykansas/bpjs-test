const express = require('express')
const router = express.Router()
const { SkillService } = require('../services')
const skillServices = new SkillService()

router.get('/:profileCode', async (req, res) => {
  const { profileCode } = req.params
  const result = await skillServices.getSkill(profileCode)
  res.send(result)
})

router.post('/:profileCode', async (req, res) => {
  const { profileCode } = req.params
  const skill = req.body
  const result = await skillServices.createSkill({ profileCode, skill })
  res.send(result)
})

router.delete('/:profileCode', async (req, res) => {
  const { profileCode } = req.params
  const { id } = req.query
  const result = await skillServices.deleteSkill({ profileCode, id })

  res.send(result)
})

module.exports = router