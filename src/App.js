import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import SignUpForm from './Components/SignupForm/SignupForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginForm />} exact/>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignUpForm />} />
      </Routes>
    </Router>
  );
}

export default App;
