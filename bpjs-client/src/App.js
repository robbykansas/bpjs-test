import { useSelector } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'quill/dist/quill.snow.css';
import AddProfileForm from './components/ProfileForm';
import AddProfessionalForm from './components/ProfessionalForm';

function App() {
  const { photo } = useSelector((state) => state.action)
  const { profile } = useSelector((state) => state.action)
  const { workingExperience } = useSelector((state) => state.action)

  const addProfile = async (e) => {
    e.preventDefault()
    console.log(profile)  
    console.log(photo, '<<<<<<< photo')
    console.log(workingExperience, '<<<< working experience')
  }

  return (
    <div>
      <div className="profile">
        <AddProfileForm />
        <AddProfessionalForm />
        <div style={{ display: 'flex' }}>
          <button type="submit" className='btn btn-primary' onClick={e => addProfile(e)} style={{marginTop: '100px', marginRight: '30px', marginLeft: 'auto'}}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
