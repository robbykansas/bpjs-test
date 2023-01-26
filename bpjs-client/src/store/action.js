import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  profileCode: '',
  profile: {
    wantedJobTitle: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    address: '',
    postalCode: '',
    drivingLicense: '',
    nationality: '',
    placeOfBirth: '',
    dateOfBirth: ''
  },
  photo: {},
  workingExperience: {},
  employment: {},
  education: {},
  skill: {}
}

export const actionSlice = createSlice({
  name: 'action',
  initialState,
  reducers: {
    setProfileCode: (state, action) => {
      state.profileCode = action.payload
    },
    setProfile: (state, action) => {
      state.profile = action.payload
    },
    setPhoto: (state, action) => {
      state.photo = action.payload
    },
    setWorkingExperience: (state, action) => {
      state.workingExperience = action.payload
    },
    setEmployment: (state, action) => {
      state.employment = action.payload
    },
    setEducation: (state, action) => {
      state.education = action.payload
    },
    setSkill: (state, action) => {
      state.skill = action.payload
    }
  }
})

export const {
  setProfileCode,
  setProfile,
  setPhoto,
  setWorkingExperience,
  setEmployment,
  setEducation,
  setSkill
} = actionSlice.actions

export default actionSlice.reducer