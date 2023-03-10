import React, { useState } from 'react'
import { Login } from './Login'
import { Register } from './Register'
import '../../Styles/Auth.css'

function Auth() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <div className="Auth">
      {currentForm === 'login' ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  )
}

export default Auth
