const { ProfileRepositories } = require('../repositories')

class EmploymentService {
  constructor() {
    this.repositories = new ProfileRepositories()
  }

  async getEmployment(profileCode) {
    const result = await this.repositories.getEmployment(profileCode)

    return result
  }

  async createEmployment(profile) {
    const result = await this.repositories.createEmployment(profile)

    return result
  }

  async deleteEmployment(profile) {
    const result = await this.repositories.deleteEmployment(profile)

    return result
  }
}

module.exports = EmploymentService