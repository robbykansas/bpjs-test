const { ProfileRepositories } = require('../repositories')

class WorkingExperienceService {
  constructor() {
    this.repositories = new ProfileRepositories()
  }

  async getWorkingExperience(profileCode) {
    const result = await this.repositories.getWorkingExperience(profileCode)

    return result
  }

  async updateWorkingExperience(profile) {
    const result = await this.repositories.updateWorkingExperience(profile)

    return result
  }
}

module.exports = WorkingExperienceService