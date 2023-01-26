const express = require('express')
const router = express.Router()
const { EmploymentService } = require('../services')
const employmentServices = new EmploymentService()

router.get('/:profileCode', async (req, res) => {
  const { profileCode } = req.params
  const result = await employmentServices.getEmployment(profileCode)
  res.send(result)
})

router.post('/:profileCode', async (req, res) => {
  const { profileCode } = req.params
  const employment = req.body
  const result = await employmentServices.createEmployment({ profileCode, employment })
  res.send(result)
})

router.delete('/:profileCode', async (req, res) => {
  const { profileCode } = req.params
  const { id } = req.query
  const result = await employmentServices.deleteEmployment({ profileCode, id })

  res.send(result)
})

module.exports = router