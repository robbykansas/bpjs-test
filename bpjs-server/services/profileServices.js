const { ProfileRepositories } = require('../repositories')

class ProfileService {
  constructor() {
    this.repositories = new ProfileRepositories()
  }

  async createProfile(profile) {
    const result = this.repositories.createProfile(profile)

    return result
  }

  async getProfile(profileCode) {
    let result = await this.repositories.getProfile(profileCode)
    result = {
      profileCode: profileCode,
      ...result.profile
    }
  
    return result
  }

  async updateProfile(profile) {
    const result = await this.repositories.updateProfile(profile)

    return result
  }

  async updatePhoto(profile) {
    const result = await this.repositories.updatePhoto(profile)

    return result
  }

  async downloadPhoto(profileCode) {
    const result = await this.repositories.downloadPhoto(profileCode)

    return result
  }

  async deletePhoto(profileCode) {
    const result = await this.repositories.deletePhoto(profileCode)

    return result
  }

  async getWorkingExperience(profile) {
    const result = await this.repositories.getWorkingExperience(profile)

    return result
  }
}

module.exports = ProfileService