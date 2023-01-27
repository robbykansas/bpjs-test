import React from 'react'
import bottomArrow from '../assets/bottomArrow.PNG'

const EmploymentSummaryForm = (props) => {
  const { employment } = props
  const { jobTitle, employer, startDate, endDate } = employment

  return(
    <div className='card'>
      <div className='card-body'>
        <div style={{ display: 'flex' }}>
          <label className='label-form'><b>{jobTitle} at {employer} </b> <br /> {startDate} - { endDate }</label>
          <img src={bottomArrow} alt='bottomArrow' style={{ marginLeft: 'auto', width: '20px', height: '20px' }} />
        </div>
      </div>
    </div>
  )
}

export default EmploymentSummaryForm