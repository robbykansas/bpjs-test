let LocalStorage = require('node-localstorage').LocalStorage
let localStorage = new LocalStorage('./scratch')

class ProfileRepositories {
  async createProfile(profile) {
    let profileCode = Math.floor(Math.random() * 100000000);
    profileCode = `${profileCode}`
    const data = { 
      profileCode,
      profile
    }
    this.setProfile({ profileCode, data })

    return { profileCode }
  }

  async getProfile(profileCode) {
    let data = localStorage.getItem(`${profileCode}`)
    data = JSON.parse(data)

    return data
  }

  setProfile({ profileCode, data }) {
    localStorage.setItem(`${profileCode}`, JSON.stringify(data))
  }

  async updateProfile({ profileCode, profile }) {
    const data = { 
      profileCode,
      profile
    }

    this.setProfile({ profileCode, data })

    return { profileCode }
  }

  async updatePhoto({ profileCode, base64img }) {
    let data = await this.getProfile(profileCode)
    data = { 
      ...data,
      base64img
    }

    this.setProfile({ profileCode, data })

    return { profileCode }
  }

  async downloadPhoto(profileCode) {
    let data = await this.getProfile(profileCode)
    data = data.base64img
    
    return data
  }

  async deletePhoto(profileCode) {
    let data = await this.getProfile(profileCode)
    delete data.base64img

    this.setProfile({ profileCode, data })
    
    return { profileCode }
  }

  async getWorkingExperience(profileCode) {
    const data = await this.getProfile(profileCode)
    const { workingExperience } = data

    return { workingExperience }
  }

  async updateWorkingExperience({ profileCode, workingExperience }) {
    let data = await this.getProfile(profileCode)
    data = {
      ...data,
      workingExperience
    }

    this.setProfile({ profileCode, data })

    return { workingExperience }
  }

  async getEmployment(profileCode) {
    const data = await this.getProfile(profileCode)
    const { employment } = data
  
    return { data: employment }
  }

  async createEmployment({ profileCode, employment }) {
    let data = await this.getProfile(profileCode)
    if (data.employment) {
      const copy = JSON.parse(JSON.stringify(data.employment))
      let id = copy.pop().id + 1
      employment.id = id
      data.employment.push(employment)
    } else {
      employment.id = 1
      data = {
        ...data,
        employment: [{ ...employment }]
      }
    }

    this.setProfile({ profileCode, data })

    return {
      profileCode,
      id: data.employment.pop().id
    }
  }

  async deleteEmployment({ profileCode, id }) {
    let data = await this.getProfile(profileCode)
    let index = data.employment.findIndex(emp => emp.id == id)
    data.employment.splice(index, 1)
    
    this.setProfile({ profileCode, data })

    return { profileCode }
  }

  async getEducation(profileCode) {
    const data = await this.getProfile(profileCode)
    const { education } = data
  
    return { data: education }
  }

  async createEducation({ profileCode, education }) {
    let data = await this.getProfile(profileCode)
    if (data.education) {
      const copy = JSON.parse(JSON.stringify(data.education))
      let id = copy.pop().id + 1
      education.id = id
      data.education.push(education)
    } else {
      education.id = 1
      data = {
        ...data,
        education: [{ ...education }]
      }
    }

    this.setProfile({ profileCode, data })

    return {
      profileCode,
      id: data.education.pop().id
    }
  }

  async deleteEducation({ profileCode, id }) {
    let data = await this.getProfile(profileCode)
    let index = data.education.findIndex(edu => edu.id == id)
    data.education.splice(index, 1)
    
    this.setProfile({ profileCode, data })

    return { profileCode }
  }

  async getSkill(profileCode) {
    const data = await this.getProfile(profileCode)
    const { skill } = data
  
    return { data: skill }
  }

  async createSkill({ profileCode, skill }) {
    let data = await this.getProfile(profileCode)
    if (data.skill) {
      const copy = JSON.parse(JSON.stringify(data.skill))
      let id = copy.pop().id + 1
      skill.id = id
      data.skill.push(skill)
    } else {
      skill.id = 1
      data = {
        ...data,
        skill: [{ ...skill }]
      }
    }

    this.setProfile({ profileCode, data })

    return {
      profileCode,
      id: data.skill.pop().id
    }
  }

  async deleteSkill({ profileCode, id }) {
    let data = await this.getProfile(profileCode)
    let index = data.skill.findIndex(emp => emp.id == id)
    data.skill.splice(index, 1)
    
    this.setProfile({ profileCode, data })

    return { profileCode }
  }
}

module.exports = ProfileRepositories