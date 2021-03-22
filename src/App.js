import logo from './logo.svg';
import './App.css';
import FormikContainer from './Components/FormikContainer';
import LoginForm from './Components/LoginForm';
import RegistrationForm from './Components/RegistrationForm';
import EnrollmentForm from './Components/EnrollmentForm';

function App() {
  return (
    <div className="App">
      {/* <FormikContainer /> */}
      {/* <LoginForm /> */}
      {/* <RegistrationForm /> */}
      <EnrollmentForm />
    </div>
  );
}

export default App;
