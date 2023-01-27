import React, { useEffect } from 'react'
import { useQuill } from 'react-quilljs'
import { useDispatch, useSelector } from 'react-redux'
import { setEmployment, setEmployments } from '../store/action'
import axios from 'axios'
import helpIcon from '../assets/helpIcon.PNG'
import topArrow from '../assets/topArrow.PNG'

const EmploymentFillingForm = (props) => {
  const dispatch = useDispatch()
  const { employment } = props
  const { profileCode } = useSelector((state) => state.action)
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered'}, { list: 'bullet' }],
      ['link']
    ]
  }
  const placeholder = 'e.g Created and implemented lesson plans based on child-led interests and curiosities'
  const formats = ['bold', 'italic', 'underline', 'strike', 'list', 'link']
  const { quillRef, quill } = useQuill({ modules, placeholder, formats })
  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        dispatch(setEmployment({ ...employment, ['description']: quill.getText()}))
      });
    }
  }, [quill]);

  const handleInput = (e) => {
    const {name, value} = e.target
    dispatch(setEmployment({ ...employment, [name]: value }))
  }

  const helpDate = (e) => {
    e.preventDefault()
    dispatch(setEmployment({ ...employment, startDate: "01/2022", endDate: "12/2022"}))
  }

  const handleOnClick = async (e) => {
    e.preventDefault()
    const defaultData = {
      jobTitle: '',
      employer: '',
      startDate: '',
      endDate: '',
      city: '',
      description: ''
    }
    props.onChangeFtForm(false)
    await axios({
      method: 'POST',
      url: `http://localhost:3001/api/employment/${profileCode}`,
      data: employment
    })
    const {data} = await axios.get(`http://localhost:3001/api/employment/${profileCode}`)
    dispatch(setEmployments(data.data))
    dispatch(setEmployment(defaultData))
    props.onChangeForm(false)
  }

  return(
    <div className='card' style={{ height: '550px'}}>
      <form className='card-body'>
        <div style={{ display: 'flex' }}>
          <label className='form-label'><b>(Not specified)</b></label>
          <img src={topArrow} alt='topArrow' style={{ marginLeft: 'auto', width: '20px', height: '20px' }} onClick={(e) => handleOnClick(e)} />
        </div>
        <div className="row mt-3">
          <div className="col-sm-6">
            <label className="form-label text-muted"> Job title </label>
            <input type="text" name="jobTitle" value={employment.jobTitle} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} />
          </div>
          <div className="col-sm-6">
            <label className="form-label text-muted"> Employer </label>
            <input type="text" name="employer" value={employment.employer} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-3">
            <label className="form-label text-muted"> Start & End Date </label>
            <img src={helpIcon} style={{ height: '14px', width: '14px', marginLeft: '3px'}} onClick={(e) => helpDate(e)} alt='helpDate' />
            <input type="text" name="startDate" value={employment.startDate} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} placeholder='MM/YYYY'/>
          </div>
          <div className="col-sm-3">
            <label className="form-label text-muted">   </label>
            <input type="text" name="endDate" value={employment.endDate} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} placeholder='MM/YYYY'/>
          </div>
          <div className="col-sm-6">
            <label className="form-label text-muted"> City </label>
            <input type="text" name="city" value={employment.city} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-12" style={{ height: '200px'}} >
            <label className="form-label text-muted"> Description </label>
            <div ref={quillRef} style={{ backgroundColor: '#f0f2f9' }}/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EmploymentFillingForm