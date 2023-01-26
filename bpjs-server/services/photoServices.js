const { ProfileRepositories } = require('../repositories')

class PhotoService {
  constructor() {
    this.repositories = new ProfileRepositories()
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
}

module.exports = PhotoService