import React, { useEffect } from 'react'
import { useQuill } from 'react-quilljs'
import { useDispatch, useSelector } from 'react-redux'
import { setEducation, setEducations } from '../store/action'
import axios from 'axios'
import helpIcon from '../assets/helpIcon.PNG'
import topArrow from '../assets/topArrow.PNG'

const EducationFillingForm = (props) => {
  const dispatch = useDispatch()
  const { education } = props
  const { profileCode } = useSelector((state) => state.action)
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered'}, { list: 'bullet' }],
      ['link']
    ]
  }
  const placeholder = 'e.g. Graduated with High Honors'
  const formats = ['bold', 'italic', 'underline', 'strike', 'list', 'link']
  const { quillRef, quill } = useQuill({ modules, placeholder, formats })
  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        dispatch(setEducation({ ...education, ['description']: quill.getText()}))
      });
    }
  }, [quill]);

  const handleInput = (e) => {
    const {name, value} = e.target
    dispatch(setEducation({ ...education, [name]: value }))
  }

  const helpDate = (e) => {
    e.preventDefault()
    dispatch(setEducation({ ...education, startDate: "01/2022", endDate: "12/2022"}))
  }

  const handleOnClick = async (e) => {
    e.preventDefault()
    const defaultData = {
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      city: '',
      description: ''
    }
    props.onChangeFtForm(false)
    await axios({
      method: 'POST',
      url: `http://localhost:3001/api/education/${profileCode}`,
      data: education
    })
    const {data} = await axios.get(`http://localhost:3001/api/education/${profileCode}`)
    dispatch(setEducations(data.data))
    dispatch(setEducation(defaultData))
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
            <label className="form-label text-muted"> School </label>
            <input type="text" name="school" value={education.school} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} />
          </div>
          <div className="col-sm-6">
            <label className="form-label text-muted"> Degree </label>
            <input type="text" name="degree" value={education.degree} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-3">
            <label className="form-label text-muted"> Start & End Date </label>
            <img src={helpIcon} style={{ height: '14px', width: '14px', marginLeft: '3px'}} onClick={(e) => helpDate(e)} alt='helpDate' />
            <input type="text" name="startDate" value={education.startDate} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} placeholder='MM/YYYY'/>
          </div>
          <div className="col-sm-3">
            <label className="form-label text-muted">   </label>
            <input type="text" name="endDate" value={education.endDate} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} placeholder='MM/YYYY'/>
          </div>
          <div className="col-sm-6">
            <label className="form-label text-muted"> City </label>
            <input type="text" name="city" value={education.city} onChange={handleInput} className="form-control rounded-0 border-0" style={{ backgroundColor: '#f0f2f9' }} />
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

export default EducationFillingForm