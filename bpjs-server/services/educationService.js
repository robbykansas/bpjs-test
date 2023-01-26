const { ProfileRepositories } = require('../repositories')

class EducationService {
  constructor() {
    this.repositories = new ProfileRepositories()
  }

  async getEducation(profileCode) {
    const result = await this.repositories.getEducation(profileCode)

    return result
  }

  async createEducation(profile) {
    const result = await this.repositories.createEducation(profile)

    return result
  }

  async deleteEducation(profile) {
    const result = await this.repositories.deleteEducation(profile)

    return result
  }
}

module.exports = EducationService