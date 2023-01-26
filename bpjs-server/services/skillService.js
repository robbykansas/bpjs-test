const { ProfileRepositories } = require('../repositories')

class SkillService {
  constructor() {
    this.repositories = new ProfileRepositories()
  }

  async getSkill(profileCode) {
    const result = await this.repositories.getSkill(profileCode)

    return result
  }

  async createSkill(profile) {
    const result = await this.repositories.createSkill(profile)

    return result
  }

  async deleteSkill(profile) {
    const result = await this.repositories.deleteSkill(profile)

    return result
  }
}

module.exports = SkillService