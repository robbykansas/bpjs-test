import React, { useEffect } from 'react'
import { useQuill } from 'react-quilljs'
import { useDispatch } from 'react-redux'
import { setWorkingExperience } from '../store/action'

const AddProfessionalForm = () => {
  const dispatch = useDispatch()

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered'}, { list: 'bullet' }],
      ['link']
    ]
  }

  const placeholder = 'e.g Passionate science teacher with 8+ years of experience and a track record of ...'

  const formats = ['bold', 'italic', 'underline', 'strike', 'list', 'link']

  const { quillRef, quill } = useQuill({ modules, placeholder, formats })

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        dispatch(setWorkingExperience({ workingExperience: quill.getText()}))
      });
    }
  }, [quill]);

  return (
    <div className='container' style={{ marginTop: '50px' }}>
      <form>
        <h6 style={{ fontFamily: 'sans-serif' }}>Professional Summary</h6>
        <label className="form-label text-muted">
          Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievement, best qualities and skills
        </label>
        <div className='row'>
          <div className='col-sm-12' style={{ height: '200px'}}>
            <div ref={quillRef} style={{ backgroundColor: '#f0f2f9' }}/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddProfessionalForm