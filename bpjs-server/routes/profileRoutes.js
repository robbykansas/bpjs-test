const express = require('express')
const router = express.Router()
const { ProfileService } = require('../services')
const profileServices = new ProfileService()

router.get('/:profileCode', async (req, res) => {
  const { profileCode } = req.params
  const result = await profileServices.getProfile(profileCode)
  res.send(result)
})

router.post('', async (req, res) => {
  const profile = req.body
  const result = await profileServices.createProfile(profile)
  res.send(result)
})

router.put('/:profileCode', async (req, res) => {
  const { profileCode } = req.params
  const profile = req.body
  const result = await profileServices.updateProfile({ profileCode, profile })

  res.send(result)
})

module.exports = router