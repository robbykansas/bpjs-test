import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import EmploymentFillingForm from './EmploymentFillingForm'
import EmploymentSummaryForm from './EmploymentSummaryForm'

const AddEmploymentForm = () => {
  const { employment } = useSelector((state) => state.action)
  const { employments } = useSelector((state) => state.action)
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
        <h6 style={{ fontFamily: 'sans-serif' }}>Employment History</h6>
        <label className="form-label text-muted">
          Show your relevant experience (last 10 years). Use bullet points to note your achievement, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z)
        </label>
        {employments === [] ? null : employments.map((val, i)=> {
          return(
            <div style={{ marginBottom: '10px' }}>
              { summary ? <EmploymentSummaryForm employment={val} onChangeForm={changeForm} /> : <EmploymentFillingForm employment={val} onChangeForm={changeForm} />}
            </div>
          )
        })}
        { ftForm ? <EmploymentFillingForm employment={employment} onChangeForm={changeForm} onChangeFtForm={changeFtForm} /> : null}
        <label className="text-primary" onClick={(e) => handleOnClick(e)} style={{ marginLeft: '20px'}}><b> + Add employment </b></label>
      </form>
    </div>
  )
}

export default AddEmploymentForm