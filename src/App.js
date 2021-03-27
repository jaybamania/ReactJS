import logo from './logo.svg';
import './App.css';
import FormikContainer from './Components/FormikContainer';
import LoginForm from './Components/LoginForm';
import RegistrationForm from './Components/RegistrationForm';
import EnrollmentForm from './Components/EnrollmentForm';
import { ThemeProvider , theme } from '@chakra-ui/core';



function App() {
  return (
    <ThemeProvider  theme={theme}>
    <div className="App" >
      {/* <FormikContainer /> */}
      {/* <LoginForm /> */}
      {/* <RegistrationForm /> */}
      <EnrollmentForm />
    </div>
    </ThemeProvider>
  );
}

export default App;
