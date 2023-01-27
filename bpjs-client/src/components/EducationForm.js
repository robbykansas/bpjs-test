import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import EducationFillingForm from './EducationFillingForm'
import EducationSummaryForm from './EducationSummaryForm'

const AddEducationForm = () => {
  const { education } = useSelector((state) => state.action)
  const { educations } = useSelector((state) => state.action)
  const [filling, setFilling] = useState(false)
  const [summary, setSummary] = useState(false)
  const [ftForm, setFtForm] = useState(false)


  const changeForm = (change) => {
    setFilling(change)
    filling ? setSummary(false) : setSummary(true)
  }

  const changeFtForm = (change) => {
    setFtForm(change)
  }

  const handleOnClick = async (e) => {
    e.preventDefault()
    setFtForm(true)
  }

  return (
    <div className='container' style={{ marginTop: '100px' }}>
      <form>
        <h6 style={{ fontFamily: 'sans-serif' }}>Education</h6>
        <label className="form-label text-muted">
          A varied education on your resume sums up the value that your learnings and background will bring to job
        </label>
        {educations == [] ? null : educations.map((val, i)=> {
          return(
            <div style={{ marginBottom: '10px' }}>
              { summary ? <EducationSummaryForm education={val} onChangeForm={changeForm} /> : <EducationFillingForm education={val} onChangeForm={changeForm} />}
            </div>
          )
        })}
        { ftForm ? <EducationFillingForm education={education} onChangeForm={changeForm} onChangeFtForm={changeFtForm} /> : null}
        <label className="text-primary" onClick={(e) => handleOnClick(e)} style={{ marginLeft: '20px'}}><b> + Add education </b></label>
      </form>
    </div>
  )
}

export default AddEducationForm