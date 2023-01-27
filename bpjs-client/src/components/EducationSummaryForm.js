import React from 'react'
import bottomArrow from '../assets/bottomArrow.PNG'

const EducationSummaryForm = (props) => {
  const { education } = props
  const { school, degree, startDate, endDate } = education

  return(
    <div className='card'>
      <div className='card-body'>
        <div style={{ display: 'flex' }}>
          <label className='label-form'><b>{degree} at {school} </b> <br /> {startDate} - { endDate }</label>
          <img src={bottomArrow} alt='bottomArrow' style={{ marginLeft: 'auto', width: '20px', height: '20px' }} />
        </div>
      </div>
    </div>
  )
}

export default EducationSummaryForm