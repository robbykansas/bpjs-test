import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'quill/dist/quill.snow.css';
import AddProfileForm from './components/ProfileForm';
import AddProfessionalForm from './components/ProfessionalForm';
import AddEmploymentForm from './components/EmploymentForm';
import AddEducationForm from './components/EducationForm';
import SubmittedButton from './components/submittedButton';

function App() {
  return (
    <div>
      <div className="profile">
        <AddProfileForm />
        <AddProfessionalForm />
        <AddEmploymentForm />
        <AddEducationForm />
        <SubmittedButton />
      </div>
    </div>
  );
}

export default App;
