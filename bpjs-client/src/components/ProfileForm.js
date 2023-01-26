import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import blankPhoto from '../assets/blankPhoto.PNG'
import helpIcon from '../assets/helpIcon.PNG'
import { setProfile, setPhoto } from '../store/action'

const AddProfileForm = () => {
  const dispatch = useDispatch()
  const { photo } = useSelector((state) => state.action)
  const { profile } = useSelector((state) => state.action)
  const { workingExperience } = useSelector((state) => state.action)

  const [image, setImage] = useState('')

  const convertToBase64 = e => {
    e.preventDefault()
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      setImage(reader.result.toString())
      dispatch(setPhoto({ base64img: reader.result.toString()}))
    }

    reader.readAsDataURL(file)
  };

  const helpJob = (e) => {
    e.preventDefault()
    dispatch(setProfile({ ...profile, wantedJobTitle: "Software Engineer" }))
  }

  const helpLicense = (e) => {
    e.preventDefault()
    dispatch(setProfile({ ...profile, drivingLicense: '1234567890123456'}))
  }

  const helpNationality = (e) => {
    e.preventDefault()
    dispatch(setProfile({ ...profile, nationality: 'Indonesia' }))
  }

  const helpDob = (e) => {
    e.preventDefault()
    dispatch(setProfile({ ...profile, dateOfBirth: '20-12-1990' }))
  }

  const handleInput = (e) => {
    const { name, value } = e.target
    dispatch(setProfile({ ...profile, [name]: value }))
  }

  const addProfile = async (e) => {
    e.preventDefault()
    console.log(profile)  
    console.log(photo, '<<<<<<< photo')
    console.log(workingExperience, '<<<< working experience')
  }

  return (
    <div className="container" style={{ marginTop: '50px' }}>
      <form>
        <h6 style={{ fontFamily: 'sans-serif' }}>Personal Details</h6>
        <div className="row mt-3">
          <div className="col-sm-6">
            <label className="form-label text-muted"> Wanted Job Title </label>
            <img src={helpIcon} style={{ height: '14px', width: '14px', marginLeft: '3px'}} onClick={(e) => helpJob(e)} alt='helpJob' />
            <input type="text" name="wantedJobTitle" value={profile.wantedJobTitle} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} />
          </div>
          <div className="col-sm-6" style={{ marginTop: '17px'}}>
            {image? <img src={image} alt='imagePhoto' /> : <img src={blankPhoto} alt='blankPhoto' />}
            <input id="fileupload" className='d-none' type="file" onChange={e => convertToBase64(e)} />
            <label htmlFor="fileupload" class="form-label text-primary" style={{ marginLeft: '15px'}}> Upload Photo </label>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-6">
            <label className="form-label text-muted"> First Name</label>
            <input type="text" name="firstName" value={profile.firstName} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} />
          </div>
          <div className="col-sm-6">
            <label className="form-label text-muted"> Last Name</label>
            <input type="text" name="lastName" value={profile.lastName} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-6">
            <label className="form-label text-muted"> Email </label>
            <input type="text" name="email" value={profile.email} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} />
          </div>
          <div className="col-sm-6">
            <label className="form-label text-muted"> Phone </label>
            <input type="text" name="phone" value={profile.phone} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-6">
            <label className="form-label text-muted"> Country </label>
            <input type="text" name="country" value={profile.country} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} />
          </div>
          <div className="col-sm-6">
            <label className="form-label text-muted"> City </label>
            <input type="text" name="city" value={profile.city} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-6">
            <label className="form-label text-muted"> Address </label>
            <input type="text" name="address" value={profile.address} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} />
          </div>
          <div className="col-sm-6">
            <label className="form-label text-muted"> Postal Code </label>
            <input type="text" name="postalCode" value={profile.postalCode} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-6">
            <label className="form-label text-muted"> Driving License </label>
            <img src={helpIcon} style={{ height: '14px', width: '14px', marginLeft: '3px'}} onClick={(e) => helpLicense(e)} alt='helpLicense' />
            <input type="text" name="drivingLicense" value={profile.drivingLicense} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} />
          </div>
          <div className="col-sm-6">
            <label className="form-label text-muted"> Nationality </label>
            <img src={helpIcon} style={{ height: '14px', width: '14px', marginLeft: '3px'}} onClick={(e) => helpNationality(e)} alt='helpNationality' />
            <input type="text" name="nationality" value={profile.nationality} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-6">
            <label className="form-label text-muted"> Place Of Birth </label>
            <input type="text" name="placeOfBirth" value={profile.placeOfBirth} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} />
          </div>
          <div className="col-sm-6">
            <label className="form-label text-muted"> Date Of Birth </label>
            <img src={helpIcon} style={{ height: '14px', width: '14px', marginLeft: '3px'}} onClick={(e) => helpDob(e)} alt='helpDob'/>
            <input type="text" name="dateOfBirth" value={profile.dateOfBirth} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddProfileForm