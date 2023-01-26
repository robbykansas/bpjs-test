const express = require('express')
const router = express.Router()
const { PhotoService } = require('../services')
const photoServices = new PhotoService()

router.put('/:profileCode', async (req, res) => {
  const { profileCode } = req.params
  const { base64img } = req.body
  const result = await photoServices.updatePhoto({ profileCode, base64img })

  res.send(result)
})

router.get('/:profileCode', async (req, res) => {
  const { profileCode } = req.params
  const result = await photoServices.downloadPhoto(profileCode)

  res.send(result)
})

router.delete('/:profileCode', async (req, res) => {
  const { profileCode } = req.params
  const result = await photoServices.deletePhoto(profileCode)

  res.send(result)
})

module.exports = router