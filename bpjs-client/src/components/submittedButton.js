import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios'
import { setProfileCode } from "../store/action"

const SubmittedButton = () => {
  const dispatch = useDispatch()
  const { profileCode } = useSelector((state) => state.action)
  const { photo } = useSelector((state) => state.action)
  const { profile } = useSelector((state) => state.action)
  const { workingExperience } = useSelector((state) => state.action)
  const { employment } = useSelector((state) => state.action)
  const profileUrl = 'http://localhost:3001/api/profile/'
  const photoUrl = 'http://localhost:3001/api/photo/'
  const workingExperienceUrl = 'http://localhost:3001/api/working-experience/'
  // const employmentUrl = 'http://localhost:3001/api/employment/'
  // const educationUrl = 'http://localhost:3001/api/education/'
  // const skillUrl = 'http://localhost:3001/api/skill/'

  const addProfile = async (e) => {
    e.preventDefault()
    if (profileCode === '') {
      const { data } = await axios({
        method: 'POST',
        url: profileUrl,
        data: profile
      })
      dispatch(setProfileCode(data.profileCode))
    } else {
      await axios({
        method: 'PUT',
        url: profileUrl + profileCode,
        data: profile
      })

      await axios({
        method: 'PUT',
        url: workingExperienceUrl + profileCode,
        data: workingExperience
      })

      if(JSON.stringify(photo) !== '{}') {
        await axios({
          method: 'PUT',
          url: photoUrl + profileCode,
          data: photo
        })
      }
    }
    
    console.log(profileCode, '<< profileCode')
    console.log(profile, '<< profile')
    console.log(photo, '<< photo')
    console.log(workingExperience, '<< working experience')
    console.log(employment, '<< employment')
  }

  return (
    <div style={{ display: 'flex' }}>
      <button type="submit" className='btn btn-primary' onClick={e => addProfile(e)} style={{marginTop: '100px', marginRight: '30px', marginLeft: 'auto'}}>Submit</button>
    </div>
  )
}

export default SubmittedButton